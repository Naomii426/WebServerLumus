import {$authHost,$host} from "./index";

export const createType = async (type) =>{
    const {data} = await $authHost.post('api/type',type)
    return data
}

export const fetchTypes = async () =>{
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) =>{
    const {data} = await $authHost.post('api/brand',brand)
    return data
}

export const fetchBrands = async () =>{
    const {data} = await $host.get('api/brand')
    return data
}

export const createLegal = async (legal) => {
    const {data} = await $host.post('api/legal/new', legal)
    return data
}

export const fetchLegal = async () =>{
    const {data} = await $host.get('api/legal')
    return data
}

export const createProduct = async (product) =>{
    const {data} = await $authHost.post('api/product',product)
    return data
}

export const delProduct = async (id) => {
    const {data} = await $authHost.post('api/product/del/'+id)
    return data
}

export const setDescription = async (_id, text) => {
    const {data} = await $authHost.post('api/product/update',_id, text)
    return data
}

export const fetchProducts = async (typeId, brandId, page, limit = 12) =>{
    const {data} = await $host.get('api/product', {params:{
                typeId, brandId, page, limit
        }})
    return data
}
export const fetchOneProduct = async (id) =>{
    const {data} = await $host.get('api/product/' + id)
    return data
}
export const addToBasket = async (productId) => {
    const {data} = await $authHost.post('api/basket', productId)
    return data
}

export const deleteFromBasket = async (id) => {
    const {data} = await $authHost.post('api/basket/delete',{id:id})
    return data
}

export const getBasket = async () => {
    const {data} = await $authHost.get('api/basket')
    return data}


export const addOrder = async (id, phone, postcode, addressee) =>{
    const {data} = await $host.post('api/order',{
        id, phone, postcode, addressee
    })
    return data
}

export const getOrder = async (id) => {
    const {data} = await $authHost.get('api/order')
    return data
}

export const getUserOrder = async (id) => {
    if(!id)id=0;
    const {data} = await $authHost.get('api/order/user/'+id,id)
    return data
}

export const getUserOrderList = async (id) => {
    if(!id)id=0;
    const {data} = await $authHost.get('api/order/'+id, id)
    return data
}

export const updateUserOrder = async (id, status) => {
    if(!id)id=0;
    const {data} = await $authHost.post('api/order/update/'+ id,{params:{id, status}})
    return data
}

export const updateAmount = async (_id, _amount) => {
    const {data} = await $authHost.post('api/product/update/'+ _id, {_id,_amount})
    return data
}