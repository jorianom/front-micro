import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { Form } from 'react-bootstrap';
import { postCategory, postProduct, putCategory, putProduct } from '../store/slices/thunks';

export const FormSubmit = ({ name, type, idValue, valueEdit }) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({
        name: valueEdit ? valueEdit : ""
    });
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const dispatch = useDispatch();

    const onClickNew = () => {
        if (name == "Productos") {
            dispatch(postProduct(value));
        } else {
            dispatch(postCategory(value))
        }
    };
    const onClickEdit = (id) => {
        if (name == "Productos") {
            dispatch(putProduct(value, id));
        } else {
            dispatch(putCategory(value, id));
        }
        handleClose();
    };
    const handleChange = e => {
        setValue({
            name: e.target.value
        });
    };
    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                {type == "post" ? "Crear nuevo" : "Editar"}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{type == "post" ? "Crear nuevo" : "Editar"}: {name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Indica un nombre: </Form.Label>
                            <Form.Control type="text" placeholder="pizzas" value={value.name}
                                onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={type == "post" ? onClickNew : () => onClickEdit(idValue)}>
                        {type == "post" ? "Crear" : "Editar"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
