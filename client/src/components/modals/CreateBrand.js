import React, {useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createBrand} from "../../http/productApi";

const CreateBrand = (props) => {
    const [value, setValue] = useState('')
    const addBrand = () =>{
        createBrand({name: value}).then(data => {
            setValue('')
            props.onHide()
        })
    }

    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый брэнд
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={value} onChange={e => setValue(e.target.value)} placeholder={"Введите название типа"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={props.onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={addBrand}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;