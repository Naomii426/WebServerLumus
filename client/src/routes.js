import Admin from "./pages/Admin";
import {ADMIN_ROUTES, BASKET_ROUTES, PRODUCT_ROUTES, REGISTRATION_ROUTES,SHOP_ROUTES,LOGIN_ROUTES} from "./utils/consts";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ProductPage from "./pages/ProductPage";

export const authRoutes = [                     //создадим два массива хранящие определенно-доступные маршруты
    {
        path: ADMIN_ROUTES,
        Component: Admin
    },
    {
        path: BASKET_ROUTES,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTES,
        Component: Shop
    },
    {
        path: LOGIN_ROUTES,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTES,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTES + '/:id',
        Component: ProductPage
    }
]