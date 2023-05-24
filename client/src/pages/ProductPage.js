import React, {useContext, useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {addToBasket, delProduct, fetchOneProduct, updateAmount} from "../http/productApi";
import {Context} from "../index";
import SetDescription from "../components/modals/SetDescription";
import '../stylecomponents/buttonstyle.css'
import '../stylecomponents/wordcharactersproduct.css'
const ProductPage = () => {
    const {user} = useContext(Context)
    const [product, setProduct] = useState({info: []})
    const {id} = useParams()
    const [productVisible, setProductVisible] = useState(false)
    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])

    const [value, setValue] = useState('')

    const Amount = () => {
        updateAmount(id,value).then(data => alert(`Количество товара обновлено`))
    }
    const add = () => {
        const formData = new FormData()
        formData.append('productId', id)
        addToBasket(formData).then(data => alert(`Товар` + product.name + `был добавлен в вашу корзину!`))
    }
    return (
        <Container className="mt-3">
            <Row>
                <Col md={6} >
                    <Image width={500} height={500} src={process.env.REACT_APP_API_URL + product.img}/>
                    <h1 className='fontcharacter'>{product.name}</h1>
                </Col>
                <Col className='mt-4 fontcharacter '>
                    <h2>Характеристики</h2>
                    {product.info.map((info, index) =>
                        <Row  key={info.id}  style={{
                            padding: 10
                        }}>
                            <Col >{info.title}</Col><Col>  {info.description}</Col>
                        </Row>
                    )}
                </Col>
            </Row><br/>
            <Row>
                <Col className={"w-75"}>
                    <label className='fontcharacterv2' >
                        {product._info}
                    </label>
                </Col>
                <Col md={3}>
                    <Card
                        className="d-flex flex-column align-items-center align-self-end p-3 bgcardbasket "
                        style={{width: 200}}
                    >
                        <h3 className='fontcharacter'>От: {product.price} Р.</h3>


                        <Button variant={"outline-dark"} className="bg-dark text-light but fontcharacterv3" onClick={add}>+</Button>

                    </Card>
                </Col>
            </Row>
            {user.user.role ==="ADMIN"?
                <Row>

                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2 bg-primary text-light"
                        onClick={() => setProductVisible(true)}
                    >
                        Добавить описание
                    </Button>
                    <Button
                        variant={"outline-dark"}
                        className="mt-4 p-2 bg-danger text-light"
                        onClick={() => delProduct(id).then(data => alert(`Товар был удален!`)) }
                    >
                        Удалить
                    </Button>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Control
                                    value={value}
                                    onChange={e => setValue(e.target.value)}
                                    placeholder={"Введите количество "}
                                    style={{height:"auto"}}
                                    className="mt-4 w-100 p-2"
                                />
                            </Form>
                        </Col>
                        <Col>
                            <Button
                                variant={"outline-dark"}
                                className="mt-4 w-100 p-2 bg-success text-light mb-5"
                                onClick={Amount}
                            >
                                Обновить количество
                            </Button>
                        </Col>

                    </Row>
                    <SetDescription show={productVisible} onHide={() => setProductVisible(false)}/>
                </Row>:<br/>
            }
        </Container>
    );
};

export default ProductPage;