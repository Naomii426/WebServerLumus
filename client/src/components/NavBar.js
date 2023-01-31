import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import {SHOP_ROUTES} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {             //обернем весь блок в функцию observer, для того чтобы mobx мог отслеживать изменение состояний и перерендеривать объект
    const {user} = useContext(Context) //добавляем контекст, потому что в зависимости от авторизованности NavBar будет отображаться по разному
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={SHOP_ROUTES}>LumusLamp</NavLink>
                {user.isAuth ?                                                      //Если пользователь авторизован, то NavBar будет отображаться так
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-secondary"}>Панель адинистратора</Button>
                    <Button variant={"outline-secondary"}>Выйти</Button>
                </Nav>
                    :                                                               //Если пользователь неавторизован, то NavBar будет отображаться так
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-secondary"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;