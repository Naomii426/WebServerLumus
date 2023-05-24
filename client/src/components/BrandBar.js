import React, {useContext} from 'react';
import {observer} from "mobx-react";
import {Card, Form} from "react-bootstrap";
import {Context} from "../index";
import "../stylecomponents/Type_and_Brand.css";
import "../fonts.css"

const BrandBar = observer(() => {
    const {product} = useContext(Context)
    return (
        <Form className='d-flex'>
            {product.brands.map(brand =>
                    <Card
                        style={{cursor:'pointer'}}
                        key={brand.id}
                        className='p-2 ms-1 brandbar'
                        onClick={()=> product.setSelectedBrand(brand)}
                        border={brand.id === product.selectedBrand.id ? 'dark':'light'}
                    >
                        {brand.name}
                    </Card>
                )}
        </Form>
    );
});

export default BrandBar;