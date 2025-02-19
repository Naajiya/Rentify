
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
import { addProduct } from '../../../services/allApi';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';




function AddItems({ setProductChanged }) {

    const [show, setShow] = useState(false);

    const [freeSizeBtn, setFreeSizeBtn] = useState(true)

    const [items, setItems] = useState({ name: "", description: "", category: "", price: "", size: [], availability: false, imgOne: "", imgTwo: "" })
    // console.log('itsm')
    console.log(items)
    const [image_one, setImageOne] = useState()
    const [image_two, setImageTwo] = useState()



    // image 
    const [isValidOne, setIsValidOne] = useState(false)
    const [isValidTwo, setIsValidTwo] = useState(false)
    const [previewOne, setPreviewOne] = useState(img)
    const [previewTwo, setPreviewTwo] = useState(img2)


    // useeffect show image
    useEffect(() => {
        if (image_one && ["image/png", "image/jpg", "image/jpeg"].includes(image_one.type)) {
            setIsValidOne(true);
            setPreviewOne(URL.createObjectURL(image_one));
        } else {
            setIsValidOne(false);
            // setItems(prev => ({ ...prev, imgOne: "" }));
            setPreviewOne(img);
        }

        if (image_two && ["image/png", "image/jpg", "image/jpeg"].includes(image_two.type)) {
            setIsValidTwo(true);
            setPreviewTwo(URL.createObjectURL(image_two));
        } else {
            setIsValidTwo(false); // Change to setIsValidTwo
            // setItems(prev => ({ ...prev, imgTwo: "" }));
            setPreviewTwo(img2);
        }
    }, [image_one, image_two]);



    const handleClose = () => {
        setShow(false);
        setItems({ name: "", description: "", category: "", price: "", size: [], availability: false, imgOne: "", imgTwo: "" })
        setPreviewOne(img);  // Reset to default image
        setPreviewTwo(img2); // Reset to default image
        setImageOne(null);  // Clear the image file
        setImageTwo(null);  // Clear the image file
        setIsValidOne(false); // Reset validation state
        setIsValidTwo(false); // Reset validation state
        setFreeSizeBtn(true);
    }
    const handleShow = () => setShow(true);


    // size l, m, s
    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        setItems(prevItems => {
            const newSize = checked ? [...prevItems.size, value] : prevItems.size.filter(size => size !== value);
            return { ...prevItems, size: newSize };
        });
    };

    // freesize change
    const handleSize = () => {
        setFreeSizeBtn((prev) => {
            const newFreeSizeBtn = !prev; // Toggle freeSizeBtn state
            setItems((prevItems) => {
                let newSize;
                if (!newFreeSizeBtn) {
                    // If freeSizeBtn is false, add 'Freeize' and remove other sizes
                    newSize = ['Freeize'];
                } else {
                    // If freeSizeBtn is true, remove 'Freeize' and keep other sizes
                    newSize = prevItems.size.filter((size) => size !== 'Freeize');
                }
                return { ...prevItems, size: newSize };
            });
            return newFreeSizeBtn;
        });
    };

    const handleAvailable = (e) => {
        const { checked } = e.target;
        console.log(checked)
        if (checked) {
            setItems({ ...items, availability: true })
        } else {
            setItems({ ...items, availability: false })
        }
    }




    const handleAddProduct = async () => {
        const { name, description, category, price, size, availability } = items;

        if (!name || !description || !category || !price || size.length === 0) {
            toast.error('Please fill all required fields');
            return;
        }

        const reqBody = new FormData();
        reqBody.append("name", name);
        reqBody.append("description", description);
        reqBody.append("category", category);
        reqBody.append("price", price);
        reqBody.append("size", JSON.stringify(size)); // Send as JSON string
        reqBody.append("availability", availability.toString()); // Convert to string

        if (image_one) reqBody.append("imgOne", image_one);
        try {
            // const result = await addProduct(reqBody, reqHeader);
            const result = await axios.post('http://localhost:3000/addProducts', reqBody, { 
            headers: { 
                Authorization: sessionStorage.getItem('token'),
                'Content-Type': 'multipart/form-data',
             } })
            if (result.status === 200) {
                console.log(result.status)
                toast.success("Product added successfully");
                setProductChanged(result.data)
                handleClose();
                setItems({ name: "", description: "", category: "", price: "", size: [], availability: false, imgOne: "", imgTwo: "" });
                setPreviewOne(img)
                setIsValidOne(false)
                setFreeSizeBtn(true);
            } else {

                toast.error('Failed to add product');
            }
        } catch (err) {
            console.error('Error adding product:', err);
            toast.error('An error occurred while adding the product');
        }
    };



    return (
        <>
            <div className='d-flex flex-column'>
                <div className='d-flex bg-dark p-2 border rounded-3 text-light ' onClick={handleShow}>

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
                            <div className='bg-dark border rounded m-3 img-fluid' style={{ height: '6rem', width: '6rem' }}>
                                <label className='img-fluid'>
                                    <input
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={(e) => setImageOne(e.target.files[0])}
                                        className='img-fluid'
                                    />
                                    <img className='img-fluid' src={previewOne} alt="" />
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
                                    <input
                                        type="file"
                                        style={{ display: 'none' }}
                                        onChange={(e) => setImageTwo(e.target.files[0])}
                                    />                                    <img className='img-fluid' style={{ height: '100%' }} src={previewTwo} alt="" />
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
                                <option value="Construction Equipment">Construction Equipment</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Book">Book</option>
                                <option value="Musical Instruments">Musical Instruments</option>
                                {/* 'Men', 'Women', 'Furniture','Construction Equipment ','Electronics', ' Book', 'Musical Instruments' */}
                            </Form.Select>

                            <FloatingLabel
                                controlId="floatingInput3"
                                label="Price"
                                className="mb-3 w-50 m-2"
                            >
                                <Form.Control onChange={(e) => setItems({ ...items, price: e.target.value })} type="number" placeholder="Price" />
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
                            <p className='fw-bold m-1'>Select Size</p>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <button className='btn btn-light m-1' onClick={handleSize}>
                                        {freeSizeBtn ? 'Free Size' : 'Remove Free Size'}
                                    </button>
                                </div>
                                {freeSizeBtn && (
                                    <div>
                                        <Form.Check
                                            inline
                                            label="S"
                                            name="size"
                                            type='checkbox'
                                            value="S"
                                            onChange={handleSizeChange}
                                            checked={items.size.includes('S')}
                                        />
                                        <Form.Check
                                            inline
                                            label="M"
                                            name="size"
                                            type='checkbox'
                                            value="M"
                                            onChange={handleSizeChange}
                                            checked={items.size.includes('M')}
                                        />
                                        <Form.Check
                                            inline
                                            label="L"
                                            name="size"
                                            type='checkbox'
                                            value="L"
                                            onChange={handleSizeChange}
                                            checked={items.size.includes('L')}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleAddProduct}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


              

            </div>
        </>
    )
}

export default AddItems