import React, {useContext, useEffect, useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import {createProduct, fetchBrands, fetchProducts, fetchTypes} from "../../http/productApi";
import {observer} from "mobx-react-lite";

const CreateProduct = observer((props) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const{product}=useContext(Context)
    const[info, setInfo] = useState([])

    useEffect(()=>{
        fetchTypes().then(data => product.setTypes(data))
        fetchBrands().then(data => product.setBrands(data))
    },[])

    const addInfo = () =>{
        setInfo([...info,{title:'', description: '', number: Date.now()}]) //функция добавления характеристик
    }
    const removeInfo = (number) =>{
        setInfo(info.filter(i => i.number !== number)) //функция удаления характеристик
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) =>{
        setInfo(info.map(i=> i.number === number ? {...i, [key]: value}: i))
    }

    const addProduct = () =>{
        const formData = new FormData
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', product.selectedBrand.id)
        formData.append('typeId', product.selectedType.id)
        formData.append('info', JSON.stringify(info))

        createProduct(formData).then(data => props.onHide())
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
                    <Dropdown.Toggle>{product.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product.types.map(type =>
                            <Dropdown.Item onClick={() => product.setSelectedType(type)} key={type.id}>{type.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className='mt-2 '>
                    <Dropdown.Toggle>{product.selectedBrand.name || "Выберите брэнд"}</Dropdown.Toggle>
                    <Dropdown.Menu>
                        {product.brands.map(brand =>
                            <Dropdown.Item onClick={() => product.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Control
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="mt-2"
                    placeholder="Введите название товара"
                />
                <Form.Control
                    value={price}
                    onChange={e => setPrice(Number(e.target.value))}
                    className="mt-2"
                    placeholder="Введите стоимость товара"
                    type="number"
                />
                <Form.Control
                    className="mt-2"
                    type='file'
                    onChange={selectFile}
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
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название характеристики"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
                <Button variant={"outline-success"} onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateProduct;