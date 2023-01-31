import {makeAutoObservable} from "mobx";

export default class UserStore{     //глобавльное хранилице, можем получать эти данные в люом месте приложения
        constructor() {         //создаем конструктор, который будет вызываться при создании объекта данного класса
            this._isAuth = false
            this._user = {}
            makeAutoObservable(this)    //функция следит за изменением этих переменных и при их изменении компоненты будут перерендириваться
        }

        setIsAuth(bool){            //создам экшены, в данном случае это функции, которые как то изменяют состояние
            this._isAuth = bool
        }
        setUser(user){            //создам экшены, в данном случае это функции, которые как то изменяют состояние
            this._user = user
        }

        get isAuth(){               //создадим геттеры, они нужны чтобы получать значения из состояний
            return this._isAuth
        }

        get user(){
            return this._user
        }
}