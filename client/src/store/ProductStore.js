import {makeAutoObservable} from "mobx";

export default class ProductStore{     //глобальное хранилище, можем получать эти данные в любом месте приложения
    constructor() {         //создаем конструктор, который будет вызываться при создании объекта данного класса
        this._types = []
        this._brands = []
        this._products = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 12
        makeAutoObservable(this)    //функция следит за изменением этих переменных и при их изменении компоненты будут перерендириваться
    }

    setTypes(types){            //создам экшены, в данном случае это функции, которые как то изменяют состояние
        this._types = types
    }
    setPage(page){
        this._page = page
    }
    setTotalCount(count){
        this._totalCount = count
    }
    setBrands(brands){            //создам экшены, в данном случае это функции, которые как то изменяют состояние
        this._brands = brands
    }
    setProducts(products){            //создам экшены, в данном случае это функции, которые как то изменяют состояние
        this._products = products
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){               //создадим геттеры, они нужны, чтобы получать значения из состояний
        return this._types
    }

    get brands(){
        return this._brands
    }
    get products(){               //создадим геттеры, они нужны, чтобы получать значения из состояний
        return this._products
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
    get totalCount(){
        return this._totalCount
    }
    get page(){
        return this._page
    }
    get limit(){
        return this._limit
    }
}