
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import img from '../../assets/upldlog.png'


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

                <Modal size='md' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className='d-flex m-3 mb-4 justify-content-center '>
                            <div className='bg-dark border rounded m-2' style={{ height: '6rem', width: '6rem' }}>
                                <img className='img-fluid' style={{ height: '100%' }} src={img} alt="" />
                            </div>
                            <div className='bg-dark border rounded m-2' style={{ height: '6rem', width: '6rem' }}>
                                <img className='img-fluid' style={{ height: '100%' }} src={img} alt="" />
                            </div>
                            <div className='bg-dark border rounded m-2' style={{ height: '6rem', width: '6rem' }}>
                                <img className='img-fluid' style={{ height: '100%' }} src={img} alt="" />
                            </div>
                            <div className='bg-dark border rounded m-2' style={{ height: '6rem', width: '6rem' }}>
                                <img className='img-fluid' style={{ height: '100%' }} src={img} alt="" />
                            </div>

                        </div>

                        <FloatingLabel
                            controlId="floatingInput1"
                            label="Product Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Product Name" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput2"
                            label="Product Description"
                            className="mb-3"
                        >
                            <Form.Control type="text" placeholder="Product Description" />
                        </FloatingLabel>

                        <div className='d-flex'>
                            <Form.Select aria-label="Default select example" className='w-50 m-2'>
                                <option>Category</option>
                                <option value="1">Men</option>
                                <option value="2">Women</option>
                                <option value="3">Furniture</option>
                            </Form.Select>

                            <FloatingLabel
                                controlId="floatingInput3"
                                label="Price"
                                className="mb-3 w-50 m-2"
                            >
                                <Form.Control type="number" placeholder="Price" />
                            </FloatingLabel>
                        </div>

                        <div className='m-2'>
                            <p className='fw-bold'>Select Size</p>
                            <Form.Check
                                inline
                                label="S"
                                name="group1"
                                type='checkbox'
                                
                            />
                            <Form.Check
                                inline
                                label="M"
                                name="group1"
                                type='checkbox'
                                
                            />
                             <Form.Check
                                inline
                                label="L"
                                name="group1"
                                type='checkbox'
                                
                            />
                        </div>


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