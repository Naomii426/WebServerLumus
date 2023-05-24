import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTES, BASKET_ROUTES, LOGIN_ROUTES, MYORDER_ROUTE, ORDER_ROUTE, SHOP_ROUTES} from "../utils/consts";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import '../stylecomponents/nav.css';
import '../stylecomponents/Logo.css'
import '../stylecomponents/buttonstyle.css'

const NavBar = observer(() => {             //обернем весь блок в функцию observer, для того чтобы mobx мог отслеживать изменение состояний и перерендеривать объект
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        window.location.reload();
    }
    const {user} = useContext(Context) //добавляем контекст, потому что в зависимости от авторизованности NavBar будет отображаться по разному
    return (
        <Navbar className='navbar'>
            <Container>
                <Link style={{color:'black'}} className='logo' to={SHOP_ROUTES}>LumusLamp</Link>
                {user.isAuth ?                                                      //Если пользователь авторизован, то NavBar будет отображаться так
                <Nav className="ml-auto" style={{color: 'blue'}}>
                    {user.user.role ==="ADMIN"? <div/>:<Button variant={"outline-light"} style={{color: "black", border: 0}} className='but' onClick={() =>navigate(BASKET_ROUTES) }>Корзина</Button>}
                    {user.user.role ==="ADMIN"? <Button variant={"outline-light"} style={{color: "black", border: 0}} className='but' onClick={() =>navigate(ADMIN_ROUTES) }>Панель администратора</Button>:<div/>}
                    {user.user.role ==="ADMIN"? <Button variant={"outline-light"} style={{color: "black", border: 0}} className='but' onClick={() =>navigate(ORDER_ROUTE) }>Заказы</Button>:<div/>}
                    {user.user.role ==="ADMIN"? <div/>:<Button variant={"outline-light"} style={{color: "black", border: 0}} className='but' onClick={() =>navigate(MYORDER_ROUTE) }>Мои заказы</Button>}
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