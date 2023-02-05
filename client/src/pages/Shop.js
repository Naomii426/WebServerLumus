import React from 'react';
import {Col, Container, Form} from "react-bootstrap";
import TypeBar from "../components/TypeBar";

const Shop = () => {
    return (
        <Container>
            <Form className='mt-2'>
                <Col md={3}>
                    <TypeBar>

                    </TypeBar>
                </Col>
                <Col md={9}>

                </Col>
            </Form>
        </Container>
    );
};

export default Shop;