import React, {useEffect} from 'react';
import { useContext} from 'react';
import { Context } from '../';
import {getOrder, getUserOrderList} from '../http/productApi';
import {Button, Card, Col, Container, Dropdown, Image, Row} from 'react-bootstrap'
import { observer } from 'mobx-react-lite';


const Order = observer(() => {
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
            <h1 className="pt-5 pb-2">Все заказы</h1>


            {product.order.map(products =>


                <Card className="d-flex w-100 pb-3  m-3">
                    <Row d-flex>
                        <Row className="row pb-1 m-3 ">

                            <Col className={"mt-3"}>Получатель</Col>
                            <Col className={"mt-3"}>Адрес доставки</Col>
                            <Col className={"mt-3"}>Телефон</Col>
                            <Col className={"mt-3"}>Статус</Col>
                        </Row>

                        <Row className="row pb-1 m-3 ">
                            <Col><h3>{products.addressee}</h3></Col>
                            <Col><h3>{products.postcode}</h3></Col>
                            <Col><h3>{products.phone}</h3></Col>
                            <Col>
                                {{
                                    '0': <h3> Closed</h3>,
                                    '1': <h3> Stay</h3>,
                                    '2': <h3> Go</h3>,
                                    '3': <h3> Complete</h3>
                                }[products.status]}


                                <Button className="w-75 align-self-center ms" onClick={() => product.setSelectedOrder(products.id)}> Open </Button>
                                {/*<Dropdown className="mt-2 mb-2">
                                    <Dropdown.Toggle>{product.status || "Изменить статус"}</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {product.order?.map(order =>
                                            <Dropdown.Item
                                                key={order.id}
                                            >
                                                {{
                                                    '0': <h3> Closed</h3>,
                                                    '1': <h3> Stay</h3>,
                                                    '2': <h3> Go</h3>,
                                                    '3': <h3> Complete</h3>
                                                }[order.status]}
                                            </Dropdown.Item>
                                        )}
                                    </Dropdown.Menu>
                                </Dropdown>*/}
                            </Col>
                        </Row>

                    </Row>
                    {products.id == product.selectedOrder &&
                        product.selectedOrder &&
                        <Row className="  row pb-1 m-3">
                            <Col className={"mt-3"}>id</Col>
                            <Col className={"mt-3"}>Name</Col>
                            <Col className={"mt-3"}>Price</Col>
                            <Col className={"mt-3"}>Image</Col>
                        </Row>
                    }
                    {products.id == product.selectedOrder &&
                        product._orders_lists.map
                        (products =>

                            <Card className="  p-2 row m-3  ">
                                <Row className="row">
                                    <Col className={"mt-3"}>{products.product.id}</Col>
                                    <Col className={"mt-3"}>{products.product.name}</Col>
                                    <Col className={"mt-3"}>{products.product.price}</Col>
                                    <Col className={"mt-3"}><Image width={75} height={75} src={process.env.REACT_APP_API_URL + products.product.img}/></Col>
                                </Row>
                            </Card>
                        )}
                    {products.id == product.selectedOrder &&
                        <Card className="d-flex flex-row  p-2 justify-content-between align-items-center mb-1 m-3">
                            <h1 className="align-self-end" >Итого:</h1>
                            <h3  className="ms-3 align-self-end">{prices}<span className="font-weight-light pl-2"> $$$ </span></h3>
                        </Card>}
                </Card>
            )}

        </Container>
    );

});

export default Order;