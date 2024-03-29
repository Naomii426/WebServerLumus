import {createLegal} from "../../http/productApi";
import {useState} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import {observer} from "mobx-react";

const CreateLegal = observer(({show,onHide})=>{
    const [_name, setName] = useState('')
    const [type, setType] = useState('')
    const [legal_p, setLegalP] = useState('')
    const [descr, setDescr] = useState('')
    const [_phone, setPhone] = useState('')
    const [located, setLocated] = useState('')
    const [bill, setBill] = useState('')
    const [inn, setInn] = useState('')
    const [comment, setComment] = useState('')

    const addLegal = () => {
        const formData = new FormData()
        try{
            formData.append('name', _name)
            formData.append('legal_p', legal_p)
            formData.append('descr', descr)
            formData.append('type', type)
            formData.append('phone', _phone)
            formData.append('located', located)
            formData.append('bill', bill)
            formData.append('inn', inn)
            formData.append('comment', comment)
            createLegal(formData).then(data => onHide())
        }catch (e) {
            alert(e)
        }
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                        Добавить производителя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={_name}
                        onChange={e => setName(e.target.value)}
                        className='mt-2'
                        placeholder='Введите название компании'
                    />
                    <Form.Control
                        value={legal_p}
                        onChange={e => setLegalP(e.target.value)}
                        className='mt-2'
                        placeholder='Введите юридическое лицо'

                    />
                    <Form.Control
                        value={descr}
                        onChange={e => setDescr(e.target.value)}
                        className="mt-2"
                        placeholder="Введите описание"
                    />
                    <Form.Control
                        value={type}
                        onChange={e => setType(e.target.value)}
                        className='mt-2'
                        placeholder="Введите тип компании"
                    />
                    <Form.Control
                        value={_phone}
                        onChange={e => setPhone(e.target.value)}
                        className="mt-2"
                        placeholder="Введите тeлефон"
                    />
                    <Form.Control
                        value={located}
                        onChange={e => setLocated(e.target.value)}
                        className="mt-2"
                        placeholder="Введите адрес"
                    />
                    <Form.Control
                        value={bill}
                        onChange={e => setBill(e.target.value)}
                        className="mt-2"
                        placeholder="Введите счет"
                    />
                    <Form.Control
                        maxLenght={12}
                        value={inn}
                        onChange={e => setInn(e.target.value)}
                        className="mt-2"
                        placeholder="Введите ИНН"

                    />
                    <Form.Control
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        className="mt-2"
                        placeholder="Введите комментарий"
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addLegal}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})
export default CreateLegal;