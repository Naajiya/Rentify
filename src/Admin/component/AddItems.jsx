
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


function AddItems() {

    const [show, setShow] = useState(false);

    const [items, setItems] = useState({ name: "", description: "", category: "", price: "", size: [], availability: "", imgOne: "", imgTwo: "" })
    console.log(items)


    // image 
    const [isValidOne, setIsValidOne] = useState(false)
    const [isValidTwo, setIsValidTwo] = useState(false)
    const [previewOne, setPreviewOne] = useState(img)
    const [previewTwo, setPreviewTwo] = useState(img2)


    // useeffect show image
    useEffect(() => {

        if (items.imgOne.type == "image/png" || items.imgOne.type == "image/jpg" || items.imgOne.type == "image/jpeg"){
            setIsValidOne(true)
            setPreviewOne(URL.createObjectURL(items.imgOne))
        }else{
            setIsValidOne(false)
            setItems({...items,imgOne:""})
            setPreviewOne(img)
        }

        if (items.imgTwo.type == "image/png" || items.imgTwo.type == "image/jpg" || items.imgTwo.type == "image/jpeg"){
            setIsValidTwo(true)
            setPreviewTwo(URL.createObjectURL(items.imgTwo))
        }else{
            setIsValidOne(false)
            setItems({...items,imgTwo:""})
            setPreviewTwo(img)
        }
    },[items.imgOne, items.imgTwo])



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        setItems(prevItems => {
            const newSize = checked
                ? [...prevItems.size, value]
                : prevItems.size.filter(size => size !== value);
            return { ...prevItems, size: newSize };
        });
    };

    const handleAvailable = (e) => {
        const { checked } = e.target;
        console.log(checked)
        if (checked) {
            setItems({ ...items, availability: true })
        }
    }

    return (
        <>
            <div className='d-flex flex-column'>
                <div className='d-flex bg-dark p-2 border rounded-3 text-light ' style={{ cursor: 'pointer' }} onClick={handleShow}>

                    <span><AddCircleOutlineIcon /></span>
                    AddItmes
                </div>

                <Modal size='lg' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >

                        <div className='d-flex m-3 mb-4 justify-content-center '>


                            {/* image One */}
                            <div className='bg-dark border rounded m-3' style={{ height: '6rem', width: '6rem' }}>
                                <label>
                                    <input type="file" className='img-fluid' style={{ display: 'none' }} onChange={(e) => setItems({ ...items, imgOne: e.target.files[0] })} />
                                    <img className='img-fluid' style={{ height: '100%' }} src={previewOne   } alt="" />
                                </label>
                                {
                                    !isValidOne &&
                                    <div className='text-danger text-center mt-2' style={{ fontSize: '14px' }}>
                                        upload  (jpg,jpeg,png)
                                    </div>
                                }

                            </div>  


                            {/* image Two */}
                            <div className='bg-dark border rounded m-3' style={{ height: '6rem', width: '6rem' }}>
                                <label>
                                    <input type="file" style={{ display: 'none' }} onChange={(e) => setItems({ ...items, imgTwo: e.target.files[0] })} />
                                    <img className='img-fluid' style={{ height: '100%' }} src={previewTwo} alt="" />
                                </label>
                                {
                                    !isValidTwo &&
                                    <div className='text-danger text-center mt-2' style={{ fontSize: '14px' }}>
                                        upload (jpg,jpeg,png)
                                    </div>
                                }

                            </div>


                        </div>

                        <FloatingLabel
                            controlId="floatingInput1"
                            label="Product Name"
                            className="mb-3"
                        >
                            <Form.Control type="text" onChange={(e) => setItems({ ...items, name: e.target.value })} placeholder="Product Name" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput2"
                            label="Product Description"
                            className="mb-3"
                        >
                            <Form.Control type="text" onChange={(e) => setItems({ ...items, description: e.target.value })} placeholder="Product Description" />
                        </FloatingLabel>

                        <div className='d-flex'>
                            <Form.Select onChange={(e) => setItems({ ...items, category: e.target.value })} aria-label="Default select example" className='w-50 m-2'>
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
                                <Form.Control onChange={(e) => setItems({ ...items, price: 99 })} type="number" placeholder="Price" />
                            </FloatingLabel>
                        </div>

                        <div className='m-2'>
                            <Form.Check
                                inline
                                label="Available"
                                name="size"
                                type='checkbox'
                                value="availabilty"
                                onChange={handleAvailable}
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
                                onChange={handleSizeChange}
                            />
                            <Form.Check
                                inline
                                label="M"
                                name="size"
                                type='checkbox'
                                value="M"
                                onChange={handleSizeChange}
                            />
                            <Form.Check
                                inline
                                label="L"
                                name="size"
                                type='checkbox'
                                value="L"
                                onChange={handleSizeChange}
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