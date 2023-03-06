import React from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";

const ProductPage = () => {
    const product ={id: 12, name: 'Mini', price: 1290, img: '43f145bd-25f5-4a00-ab10-1bb3584415ad.jpg'}
    return (
        <Container className= 'mt-3'>
           <Row >
               <Col md={8}>
                   <Row >
                       <h2>{product.name}</h2>
                   </Row>
                   <Image widht = {300} height={300} src={product.img} style={{border:'3px solid darkgray'}}/>

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
        </Container>
    );
};

export default ProductPage;