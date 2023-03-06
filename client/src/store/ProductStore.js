import {makeAutoObservable} from "mobx";

export default class ProductStore{     //глобавльное хранилице, можем получать эти данные в люом месте приложения
    constructor() {         //создаем конструктор, который будет вызываться при создании объекта данного класса
        this._types = [
            {id: 1, name: 'Светильники'},
            {id: 2, name: 'Открытки'},
            {id: 3, name: 'Свадебные пригласительные'},
            {id: 4, name: 'Визитки'}
        ]
        this._brands = [
            {id: 1, name: 'LumusLamp'},
            {id: 2, name: 'Smola'},
            {id: 3, name: 'WoodCard'},
            {id: 4, name: 'RDMCard'}

        ]
        this._products = [
            {id: 12, name: 'Mini', price: 1290, img: '43f145bd-25f5-4a00-ab10-1bb3584415ad.jpg'},
            {id: 13, name: 'Standart', price: 1990, img:'469c2528-fe07-4bfd-a5e6-8e221e84155d.jpg'},
            {id: 14, name: 'Postcard', price: 790, img:'374399c7-0c77-4372-a3e3-f6ef33c02a42.jpg'},
            {id: 15, name: 'CutAway', price: 890, img:'374399c7-0c77-4372-a3e3-f6ef33c02a42.jpg'},
            {id: 14, name: 'Postcard', price: 790, img:'374399c7-0c77-4372-a3e3-f6ef33c02a42.jpg'},
            {id: 14, name: 'Postcard', price: 790, img:'374399c7-0c77-4372-a3e3-f6ef33c02a42.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)    //функция следит за изменением этих переменных и при их изменении компоненты будут перерендириваться
    }

    setTypes(types){            //создам экшены, в данном случае это функции, которые как то изменяют состояние
        this._types = types
    }
    setBrands(brands){            //создам экшены, в данном случае это функции, которые как то изменяют состояние
        this._brands = brands
    }
    setProduct(products){            //создам экшены, в данном случае это функции, которые как то изменяют состояние
        this._products = products
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){               //создадим геттеры, они нужны чтобы получать значения из состояний
        return this._types
    }

    get brands(){
        return this._brands
    }
    get products(){               //создадим геттеры, они нужны чтобы получать значения из состояний
        return this._products
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
}