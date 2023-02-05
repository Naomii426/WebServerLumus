import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTES, REGISTRATION_ROUTES} from "../utils/consts";
import {Link, useLocation} from "react-router-dom";

const Auth = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTES

    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{height: window.innerHeight - 54}}

        >

            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация': 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите email...'
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите пароль...'
                    />
                    <Form className='d-flex justify-content-between mt-3 px-lg-1 '>
                        {isLogin ?
                        <div>
                            Нет аккаунта?<Link to={REGISTRATION_ROUTES} >Зарегистрируйся!</Link>
                        </div>
                            :
                                <div>
                                    Есть аккаунт? <Link to={LOGIN_ROUTES}> Войдите!</Link>
                                </div>
                        }
                        <Button
                                variant={'outline-success'}>
                            {isLogin ?'Войти' : 'Регистрация'}
                        </Button>
                    </Form>


                </Form>
            </Card>


        </Container>
    );
};

export default Auth;