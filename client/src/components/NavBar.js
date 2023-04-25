import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTES, LOGIN_ROUTES, SHOP_ROUTES} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import './nav.css';
import './Logo.css'
import './buttonstyle.css'

const NavBar = observer(() => {             //обернем весь блок в функцию observer, для того чтобы mobx мог отслеживать изменение состояний и перерендеривать объект
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    const {user} = useContext(Context) //добавляем контекст, потому что в зависимости от авторизованности NavBar будет отображаться по разному
    return (
        <Navbar className='navbar'>
            <Container>
                <Link style={{color:'black'}} className='logo' to={SHOP_ROUTES}>LumusLamp</Link>
                {user.isAuth ?                                                      //Если пользователь авторизован, то NavBar будет отображаться так
                <Nav className="ml-auto" style={{color: 'blue'}}>
                    <Button variant={"outline-light"} style={{color: "black", border: 0}} className='but' onClick={() =>navigate(ADMIN_ROUTES) }>Панель адинистратора</Button>
                    <Button variant={"outline-light"} style={{color: "black", border: 0}} className='but' onClick={() =>logOut()} className='mx-lg-2'>Выйти</Button>
                </Nav>
                    :                                                               //Если пользователь неавторизован, то NavBar будет отображаться так
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} style={{color: "black", border: 0}} className='but' onClick={() => navigate(LOGIN_ROUTES)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;