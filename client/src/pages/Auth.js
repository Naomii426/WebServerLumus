import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTES, REGISTRATION_ROUTES, SHOP_ROUTES} from "../utils/consts";
import {Link, useLocation} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import {login, registration} from "../http/userApi";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const navigate = useNavigate()
    const isLogin = location.pathname === LOGIN_ROUTES
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if(isLogin){
                data = await login(email, password)
            }else{
                data = await registration(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(SHOP_ROUTES)
        }catch (e) {
            alert(e.response.data.message)
        }
        
    }

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
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
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
                                variant={'outline-success'}
                                onClick={click}
                        >
                            {isLogin ?'Войти' : 'Регистрация'}
                        </Button>
                    </Form>


                </Form>
            </Card>


        </Container>
    );
});

export default Auth;