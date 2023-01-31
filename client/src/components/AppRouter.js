import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTES} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path,Component})=>                      //импортируем массив с роутами, которые доступны только авторизованному пользователю
                <Route key = {path} path = {path} element={<Component/>} exact/>      //Вытаскиваем путь и элемент, который по этому пути должен быть отрисован
            )}
            {publicRoutes.map(({path,Component})=>                              //публичные роуты и страницы, которые доступны только авторизованному пользователю
                <Route key = {path} path = {path} element={<Component/>} exact/>
            )}
                 <Route path = "*" element={<Navigate to={SHOP_ROUTES}/>}/>             //Добавим навигацию на начальную страницу при вводе некорректного url
        </Routes>
    );
};

export default AppRouter;