import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import * as React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import img from '../../assets/upldlog.png'
import img2 from '../../assets/upldlog2.png'
import { useEffect } from 'react';

function EditItem() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <i onClick={handleShow} class="fa-solid fa-pen"></i>

    <Modal size='lg' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >

                        <div className='d-flex m-3 mb-4 justify-content-center '>


                            {/* image One */}
                            <div className='bg-dark border rounded m-3' style={{ height: '6rem', width: '6rem' }}>
                                {/* <label> */}
                                    {/* <input type="file" className='img-fluid' style={{ display: 'none' }} onChange={(e) => setItems({ ...items, imgOne: e.target.files[0] })} />
                                    <img className='img-fluid' style={{ height: '100%' }} src={previewOne} alt="" />
                                </label>
                                {
                                    !isValidOne &&
                                    <div className='text-danger text-center mt-2' style={{ fontSize: '14px' }}>
                                        upload  (jpg,jpeg,png)
                                    </div>
                                } */}

                            </div>


                            {/* image Two */}
                            <div className='bg-dark border rounded m-3' style={{ height: '6rem', width: '6rem' }}>
                                {/* <label>
                                    <input type="file" style={{ display: 'none' }} onChange={(e) => setItems({ ...items, imgTwo: e.target.files[0] })} />
                                    <img className='img-fluid' style={{ height: '100%' }} src={previewTwo} alt="" />
                                </label>
                                {
                                    !isValidTwo &&
                                    <div className='text-danger text-center mt-2' style={{ fontSize: '14px' }}>
                                        upload (jpg,jpeg,png)
                                    </div>
                                } */}

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
                            <Form.Control type="text"  placeholder="Product Description" />
                        </FloatingLabel>

                        <div className='d-flex'>
                            <Form.Select aria-label="Default select example" className='w-50 m-2'>
                                <option>Category</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Furniture">Furniture</option>
                            </Form.Select>

                            <FloatingLabel
                                controlId="floatingInput3"
                                label="Price"
                                className="mb-3 w-50 m-2"
                            >
                                <Form.Control  type="number" placeholder="Price" />
                            </FloatingLabel>
                        </div>

                        <div className='m-2'>
                            <Form.Check
                                inline
                                label="Available"
                                name="size"
                                type='checkbox'
                                value="availabilty"
                                // onChange={handleAvailable}
                            // onChange={(e)=>setItems({...items,availability:e.target.value})}
                            />
                        </div>

                        <div className='m-2'>
                            <p className='fw-bold'>Select Size</p>
                            <Form.Check
                                inline
                                label="S"
                                name="size"
                                type='checkbox'
                                value="S"
                                // onChange={handleSizeChange}
                            />
                            <Form.Check
                                inline
                                label="M"
                                name="size"
                                type='checkbox'
                                value="M"
                                // onChange={handleSizeChange}
                            />
                            <Form.Check
                                inline
                                label="L"
                                name="size"
                                type='checkbox'
                                value="L"
                                // onChange={handleSizeChange}
                            />
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
    </>
  )
}

export default EditItem