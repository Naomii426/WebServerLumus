import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react";
import {Context} from "../index";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import {addToBasket,deleteFromBasket,getBasket,getUserOrder,getUserOrderList} from "../http/productApi";
import CreateOrder from "../components/modals/CreateOrder"
import '../stylecomponents/wordcharactersproduct.css'
import '../stylecomponents/buttonstyle.css'
const Basket = observer(() => {
    const{product,user,a} = useContext(Context)
    const [orderVisible, setOrderVisible] = useState(false)

    useEffect(()=>{
        getBasket().then(data => product.setBasket(data))
        getUserOrder(user.user.id).then(data => product.setOrders(data))
        getUserOrderList(product._selectedOrder).then(data => product.setOrdersList(data))
    },[product,product._selectedOrder,a])

    const refreshPage = () => {
        window.location.reload()
    }

    const _delete = (id) => {
        deleteFromBasket(id).then(data => alert(`Товар удален из корзины`)).then(data => refreshPage())
    }

    let prices = 0;
    {product.basket.map(price =>
        prices += Number(price.product.price)
    )}

    let prices2 = 0
    {product._orders_lists.map(price =>
        prices2 += price.product.price
    )}
    return(
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pb-2">Корзина</h1>

            {/* ------- Считаем общую сумму ------- */}


            {product.basket.map(product =>
                <Card className="d-flex w-100 p-2 justify-content-center mb-2"  key={product.id}>

                    <Row>
                        <Col md="2" className="d-inline-flex flex-row">
                            <div className="flex-row" >
                                <img src={process.env.REACT_APP_API_URL + product.product.img} alt="img not found" height={200}  />
                            </div>
                        </Col>
                        <Col  className="d-flex flex-row">
                            <div className="flex-row">
                                <h1 className="ms-5 mt-3 fontcharacterv4">{product.product.name}</h1>
                            </div>
                        </Col>
                        <Col  className="d-flex flex-row justify-content-end">
                            <div className="flex-row">
                                <h2 className="fontcharacter mt-2">{product.product.price} Р </h2>
                            </div>
                        </Col>
                        <Col  className="d-flex flex-row justify-content-end">
                            <div className="flex-row">
                                <Button className="butdeleteproduct " onClick={() => _delete(product.id)}> - </Button>
                            </div>
                        </Col>
                    </Row>
                </Card>
            )}

            <Row > <Button className="butsendorder" onClick={() => setOrderVisible(true)} >Отправить заказ</Button> </Row>
            <Card className="d-flex flex-row  p-2  mb-2 mt-3">
                <h1 className="fontcharacterv4" >Итого:</h1>
                <h3  className="ms-3 mb-2 align-self-end fontcharacter">{prices}<span className="font-weight-light pl-2"> Р </span></h3>
            </Card>
            <CreateOrder show={orderVisible} onHide={() => setOrderVisible(false)}/>
        </Container>
    )






});

export default Basket;