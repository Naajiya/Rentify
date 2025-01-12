
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function AddItems() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='d-flex flex-column'>
                <div className='d-flex bg-dark p-2 border rounded-3 text-light ' style={{ cursor: 'pointer' }} onClick={handleShow}>

                    <span><AddCircleOutlineIcon /></span>
                    AddItmes
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className='d-flex m-3 mb-4'>
                            <div className='bg-dark border rounded m-2' style={{height:'6rem',width:'6rem'}}>
                                <img src="" alt="" />
                            </div>
                            <div className='bg-dark border rounded m-2' style={{height:'6rem',width:'6rem'}}></div>
                            <div className='bg-dark border rounded m-2' style={{height:'6rem',width:'6rem'}}></div>
                            <div className='bg-dark border rounded m-2' style={{height:'6rem',width:'6rem'}}></div>

                        </div>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        </>
    )
}

export default AddItems