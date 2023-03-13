import React from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from "react-bootstrap";

const ProductPage = () => {
    const product = {id: 12, name: 'Mini', price: 1290, img: '43f145bd-25f5-4a00-ab10-1bb3584415ad.jpg'}
    const description = [
        {id:1, title: 'Размер', description: '10x15'},
        {id:2, title: 'Материал', description: 'Оргстекло'},
        {id:3, title: 'Тип подсветки', description: 'Светодиодная'},
        {id:4, title: 'Количество цветов',  description: '8' },
    ]
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
            <Form className='d-flex flex-column m-lg-3'>
                <h1>Характеристики</h1>
                {description.map((info,index)=>
                    <Row key={info.id} style={{background: index %2 ===0 ? 'darkgray':'transparent', padding:10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Form>
        </Container>
    );
};

export default ProductPage;