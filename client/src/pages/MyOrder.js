import React, {useEffect} from 'react';
import { useContext} from 'react';
import { Context } from '../';
import {getOrder, getUserOrderList} from '../http/productApi';
import {Button, Card, Col, Container,Image, Row} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';
import '../stylecomponents/wordcharactersproduct.css'


const MyOrder = observer(() => {
    const {product,user, a} = useContext(Context)
    useEffect(() => {
        getOrder(user.user.id).then(data => product.setOrders(data))
        getUserOrderList(product._selectedOrder).then(data => product.setOrdersList(data))
    }, [product,product._selectedOrder, a])

    // ----- Считаем общую сумму, которую юзер набрал в корзину ------- //

    let prices = 0;
    {product._orders_lists.map(price =>
        prices += price.product.price
    )}
    return (
        <Container
            className="d-flex flex-sm-column justify-content-center align-items-center mt-3"
        >
            <h1 className="pt-3 pb-2 fontcharacter">Мои заказы</h1>


            {product.order.map(products =>


                <Card className="d-flex w-100 pb-3  m-3">
                    <Row d-flex>
                        <Row className="row pb-1 m-3 ">
                            <Col className="mt-3 fontcharacterv4">Статус</Col>
                        </Row>

                        <Row className="row pb-1 m-2 fontcharacter ">

                            <Col>
                                {{
                                    '0': <h3> Закрыт</h3>,
                                    '1': <h3> В обработке</h3>,
                                    '2': <h3> В работе</h3>,
                                    '3': <h3> Выполнен</h3>
                                }[products.status]}


                                <Button className="w-20 align-self-center ms butsendorderv2" onClick={() => product.setSelectedOrder(products.id)}> Развернуть </Button>

                            </Col>
                        </Row>

                    </Row>
                    {products.id == product.selectedOrder &&
                        product.selectedOrder &&
                        <Row className="  row pb-1 m-3 fontcharacter">
                            <Col className={"mt-3 "}>Name</Col>
                            <Col className={"mt-3"}>Price</Col>
                            <Col className={"mt-3"}>Image</Col>
                        </Row>
                    }
                    {products.id == product.selectedOrder &&
                        product._orders_lists.map
                        (products =>

                            <Card className="  p-2 row m-3  ">
                                <Row className="row fontcharacter">
                                    <Col className={"mt-3"}>{products.product.name}</Col>
                                    <Col className={"mt-3"}>{products.product.price}</Col>
                                    <Col className={"mt-2 mb-2"}><Image width={150} height={150} src={process.env.REACT_APP_API_URL + products.product.img}/></Col>
                                </Row>
                            </Card>
                        )}
                    {products.id == product.selectedOrder &&
                        <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-1 m-3 fontcharacter">
                            <h1 className="align-self-end" >Итого:</h1>
                            <h3  className="ms-3 align-self-end">{prices}<span className="font-weight-light pl-2"> Р </span></h3>
                        </Card>}
                </Card>
            )}

        </Container>
    );

});

export default MyOrder;