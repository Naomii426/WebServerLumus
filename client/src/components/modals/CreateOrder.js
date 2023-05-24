import {addOrder} from "../../http/productApi";
import {observer} from "mobx-react";
import {useContext, useState} from "react";
import {Context} from "../../index";
import {Button, Form, Modal} from "react-bootstrap";

const CreateOrder = observer(({show, onHide})=>{
    const {user} = useContext(Context)
    const [phone, setPhone] = useState('')
    const [postcode, setPostcode] = useState('')
    const [addressee, setAddressee] = useState('')
    const id = user.user.id;

    const refreshPage = () => {
        window.location.reload()
    }
    const createOrder = () => {
        try{
            addOrder(id, phone, postcode, addressee).then(data => onHide())

        }catch (e) {
            alert(e)
        }
    }

    return(
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Заполнить запрос
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="mt-2"
                        placeholder="Введите номер телефона"
                    />
                    <Form.Control
                        value={postcode}
                        onChange={e => setPostcode(e.target.value)}
                        className="mt-2"
                        placeholder="Введите адрес доставки"
                    />
                    <Form.Control
                        value={addressee}
                        onChange={e => setAddressee(e.target.value)}
                        className="mt-2"
                        placeholder="Введите ФИО получателя"
                    />
                    <hr/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={createOrder}>Отправить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateOrder