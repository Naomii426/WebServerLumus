import React, {useContext} from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {PRODUCT_ROUTES} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import './cardproduct.css'


const ProductItem = observer(({product}) => {

    const navigate = useNavigate()
    return (
        <Col md={4} className='mt-3' onClick={() => navigate(PRODUCT_ROUTES + '/' + product.id)}>
            <Card className='cardproduct border-0' style={{width:300, height:350, cursor:'pointer', color:"black"}} border={'dark'}>
                <Image width={300} height={320} src={process.env.REACT_APP_API_URL + product.img}/>
                <div>
                    <div >{product.name}</div>
                </div>

            </Card>
        </Col>
    );
});

export default ProductItem;