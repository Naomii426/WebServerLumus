import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";

const CreateBrand = (props) => {
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
                    <Form.Control placeholder={"Введите название типа"}/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={props.onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={props.onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateBrand;