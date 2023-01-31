import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import Shop from "../pages/Shop";
import {SHOP_ROUTES} from "../utils/consts";

const NavBar = () => {
    const {user} = useContext(Context) //добавляем контекст, потому что в зависимости от авторизованности NavBar будет отображаться по разному
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}}to={SHOP_ROUTES}>LumusLamp</NavLink>
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-secondary"}>Авторизация</Button>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBar;