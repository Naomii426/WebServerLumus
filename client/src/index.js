import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import ProductStore from "./store/ProductStore";
export const Context = createContext(null)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),   //передам объект и в поле user создадим новый объект который мы сделали
        product: new ProductStore()
    }}>
        <App />
    </Context.Provider>

);


