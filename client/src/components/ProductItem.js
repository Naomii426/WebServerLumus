import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTES} from "../utils/consts";

const ProductItem = ({product}) => {
    const navigate = useNavigate()
    console.log(navigate)
    return (
        <Col md={3} className='mt-3' onClick={() => navigate(PRODUCT_ROUTES + '/' + product.id)}>
            <Card style={{width:150, cursor:'pointer'}} border={'dark'}>
                <Image width={150} height={150} src={product.img}/>
                <div>
                    <div >{product.name}</div>
                </div>
                <div className='text-black-50'>
                    Lumus
                </div>
            </Card>
        </Col>
    );
};

export default ProductItem;