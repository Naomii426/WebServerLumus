import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";

const CreateProduct = (props) => {
    const{product}=useContext(Context)
    const[info, setInfo] = useState([])

    const addInfo = () =>{
        setInfo([...info,{title:'', description: '', number: Date.now()}]) //функция добавления характеристик
    }
    const removeInfo = (number) =>{
        setInfo(info.filter(i => i.number !== number)) //функция удаления характеристик
    }
    return (
        <Modal
            {...props}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить новый товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Dropdown className='mt-2 '>
                    <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product.types.map(type =>
                            <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mt-2 '>
                    <Dropdown.Toggle>Выберите брэнд</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product.brands.map(brand =>
                            <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    className="mt-2"
                    placeholder="Введите название товара"
                />
                <Form.Control
                    className="mt-2"
                    placeholder="Введите стоимость товара"
                    type="number"
                />
                <Form.Control
                    className="mt-2"
                    type='file'
                />
                <hr/>
                <Button
                    variant='outline-dark'
                    onClick={addInfo}
                >
                    Добавить новое свойство
                </Button>
                {info.map(i=>
                        <Row className="mt-2" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите название характеристики"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите описание характеристики"
                                />
                            </Col>
                            <Col>
                                <Button variant='outline-danger'
                                        onClick={() => removeInfo(i.number)}
                                >

                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant={"outline-danger"} onClick={props.onHide}>Закрыть</Button>
                <Button variant={"outline-success"} onClick={props.onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateProduct;