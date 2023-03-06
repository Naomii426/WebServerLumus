import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import ProductItem from "./ProductItem";
import {Row} from "react-bootstrap";

const ProductList = observer(() => {
    const {product} = useContext(Context)
    return (
        <Row className='d-flex'>
            {product.products.map(product =>
                <ProductItem key={product.id} product={product}/>
            )}
        </Row>
    );
});

export default ProductList;