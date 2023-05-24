import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateType from "../components/modals/CreateType";
import CreateBrand from "../components/modals/CreateBrand";
import CreateProduct from "../components/modals/CreateProduct";
import CreateLegal from "../components/modals/CreateLegal";


const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [legalVisible, setLegalVisible] = useState(false)
    const [productVisible, setProductVisible] = useState(false)
    return (
        <Container className='d-flex flex-column fontcharacter'>
            <Button
                variant={"outline-dark"}
                className='mt-2'
                onClick={()=> setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className='mt-2'
                onClick={()=> setBrandVisible(true)}
            >
                Добавить брэнд
            </Button>
            <Button
                variant={"outline-dark"}
                className='mt-2'
                onClick={()=> setLegalVisible(true)}
            >
                Добавить производителя
            </Button>
            <Button
                variant={"outline-dark"}
                className='mt-2'
                onClick={()=> setProductVisible(true)}
            >
                Добавить товар
            </Button>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateProduct show={productVisible} onHide={() => setProductVisible(false)}/>
            <CreateLegal show={legalVisible} onHide={() => setLegalVisible(false)}/>
        </Container>
    );
};

export default Admin;