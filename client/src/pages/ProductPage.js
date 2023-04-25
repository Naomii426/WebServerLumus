import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchOneProduct} from "../http/productApi";

const ProductPage = () => {
    const [product, setProduct] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])
    return (
        <Container className= 'mt-3'>
           <Row >
               <Col md={8}>
                   <Row >
                       <h2>{product.name}</h2>
                   </Row>
                   <Image widht = {500} height={500} src={process.env.REACT_APP_API_URL + product.img} style={{border:'3px solid darkgray'}}/>

               </Col>
               <Col md={4} className='mt-5' >
                       <Card className='d-flex flex-column align-items-center justify-content-around'
                             style={{width:300, height:300, border:'3px solid darkgray'}}
                       >
                           <h3>От: {product.price} руб.</h3>
                           <Button variant='outline-dark'>Добавить в корзину</Button>
                       </Card>
               </Col>
           </Row>
            <Form className='d-flex flex-column m-lg-3'>
                <h1>Характеристики</h1>
                {product.info.map((info,index)=>
                    <Row key={info.id} style={{background: index %2 ===0 ? 'darkgray':'transparent', padding:10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Form>
        </Container>
    );
};

export default ProductPage;