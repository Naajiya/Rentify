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
import SERVER_URL from '../../../services/serverUrl';
import { updateProduct } from '../../../services/allApi';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
// import { preview } from 'vite';





function EditItem({ pro,setUpdateSucc }) {
    console.log(pro)

    const [show, setShow] = useState(false);
    const handleClose = () => {

        setShow(false)
    };

    // get size when modal open
    const [sizeS, setSizeS] = useState(false);
    const [sizeM, setSizeM] = useState(false);
    const [sizeL, setSizeL] = useState(false);
    const [sizeFreeize, setSizeFreeize] = useState(false);



    const [productDetails, setProductDetails] = useState({ id: pro?._id, name: pro?.name, description: pro?.description, category: pro?.category || "", price: pro?.price, size: pro?.size ? pro.size : [], availability: pro?.availability || false, imgOne: pro?.imgOne, imgTwo: pro?.imgTwo })

    const [img_one, setImageOne] = useState('')
    const [img_two, setImgTwo] = useState('')
    useEffect(() => {
        setImageOne(productDetails.imgOne);
        setImgTwo(productDetails.imgTwo);
    }, [productDetails.imgOne, productDetails.imgTwo]);
    // free size    
    const [freeSizeBtn, setFreeSizeBtn] = useState(true)

    // image updation
    const [previewOne, setPreviewOne] = useState(false)
    const [isValidfileOne, setIsValidfileOne] = useState(false);
    const [previewTwo, setPreviewTwo] = useState(false)
    const [isValidfileTwo, setIsValidfileTwo] = useState(false);


    useEffect(() => {
        if (productDetails.imgOne && productDetails.imgOne instanceof File) {
            const isValidType = ["image/png", "image/jpg", "image/jpeg"].includes(productDetails.imgOne.type);
            setIsValidfileOne(isValidType);
            setPreviewOne(isValidType ? URL.createObjectURL(productDetails.imgOne) : '');
        }

        if (productDetails.imgTwo && productDetails.imgTwo instanceof File) {
            const isValidType = ["image/png", "image/jpg", "image/jpeg"].includes(productDetails.imgTwo.type);
            setIsValidfileTwo(isValidType);
            setPreviewTwo(isValidType ? URL.createObjectURL(productDetails.imgTwo) : '');
        }
    }, [productDetails.imgOne, productDetails.imgTwo]);



    // modal open
    const handleShow = () => {
        console.log(productDetails);

        // Initialize size states based on productDetails.size
        setSizeS(productDetails.size.includes("S"));
        setSizeM(productDetails.size.includes("M"));
        setSizeL(productDetails.size.includes("L"));
        setSizeFreeize(productDetails.size.includes("Freeize"));

        // Set freeSizeBtn based on whether "Free size" is selected
        setFreeSizeBtn(!productDetails.size.includes("Freeize"));

        setShow(true); // Open the modal
    };



    const handleSize = () => {
        setProductDetails((prevDetails) => {
            let newSize = prevDetails.size.includes("Freeize")
                ? prevDetails.size.filter((size) => size !== "Freeize") // Remove "Free size"
                : ["Freeize"]; // Add "Free size" and remove other sizes

            return { ...prevDetails, size: newSize };
        });

        // Update the Free Size state for UI
        setSizeFreeize((prev) => !prev);

        // Disable other sizes when Free Size is selected
        if (!sizeFreeize) {
            setSizeS(false);
            setSizeM(false);
            setSizeL(false);
        }
    };


   

    const handleSizeChange = (e) => {
        const { value, checked } = e.target;

        setProductDetails((prevDetails) => {
            let updatedSizes = [...prevDetails.size];

            if (checked) {
                // Add the new size if checked
                updatedSizes.push(value);
            } else {
                // Remove the size if unchecked
                updatedSizes = updatedSizes.filter((size) => size !== value);
            }

            return { ...prevDetails, size: updatedSizes };
        });

        // Update the individual size states for UI
        if (value === "S") setSizeS(checked);
        if (value === "M") setSizeM(checked);
        if (value === "L") setSizeL(checked);
    };





    const handleUpdates = async () => {
        const { id, name, description, category, price, size, availability, imgOne, imgTwo } = productDetails;
    
        if (name && description && category && price && size) {
            const reqBody = new FormData();
            reqBody.append("name", name);
            reqBody.append("description", description);
            reqBody.append("category", category);
            reqBody.append("price", price);
            reqBody.append("size", JSON.stringify(size)); // Send size array as JSON string
            reqBody.append("availability", availability);
    
            if (imgOne instanceof File) {
                reqBody.append("imgOne", imgOne);
            } else {
                reqBody.append("imgOne", img_one); // Use existing image if no new file is uploaded
            }
    
            if (imgTwo instanceof File) {
                reqBody.append("imgTwo", imgTwo);
            } else {
                reqBody.append("imgTwo", img_two); // Use existing image if no new file is uploaded
            }
    
            try {
                const result = await axios.put(`http://localhost:3000/update-product/${id}`, reqBody, {
                    headers: {
                        Authorization: sessionStorage.getItem('token'),
                        'Content-Type': 'multipart/form-data',
                    },
                });
    
                if (result.status === 200) {
                    toast('Product updated successfully');
                    setUpdateSucc(result.data)
                    handleClose(); // Close the modal after successful update
                }
            } catch (err) {
                console.error('Update failed:', err.response?.data || err.message);
            }
        } else {
            alert('Please fill all required fields');
        }
    };





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
                            <label>
                                <input type="file" className='img-fluid' style={{ display: 'none' }} onChange={(e) => setProductDetails({ ...productDetails, imgOne: e.target.files[0] })} />
                                <img className='img-fluid' style={{ height: '100%' }} src={previewOne ? previewOne : `${SERVER_URL}/uploads/${pro.imgOne}`} alt="" />
                            </label>
                            {
                                !isValidfileOne &&
                                <div className='text-danger text-center mt-2' style={{ fontSize: '14px' }}>
                                    upload  (jpg,jpeg,png)
                                </div>
                            }

                        </div>


                        {/* image Two */}
                        <div className='bg-dark border rounded m-3' style={{ height: '6rem', width: '6rem' }}>
                            <label>
                                <input type="file" style={{ display: 'none' }} onChange={(e) => setProductDetails({ ...productDetails, imgTwo: e.target.files[0] })} />
                                <img className='img-fluid' style={{ height: '100%' }} src={previewTwo ? previewTwo : `${SERVER_URL}/uploads/${pro.imgTwo}`} alt="" />
                            </label>
                            {
                                !isValidfileTwo &&
                                <div className='text-danger text-center mt-2' style={{ fontSize: '14px' }}>
                                    upload (jpg,jpeg,png)
                                </div>
                            }

                        </div>


                    </div>
                    {/* product name */}

                    <FloatingLabel
                        controlId="floatingInput1"
                        label="Product Name"
                        className="mb-3"
                        onChange={(e) => setProductDetails({ ...productDetails, name: e.target.value })}
                    >
                        <Form.Control type="text" value={productDetails.name} placeholder="Product Name" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput2"
                        label="Product Description"
                        className="mb-3"
                        onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
                    >
                        <Form.Control type="text" value={productDetails.description} placeholder="Product Description" />
                    </FloatingLabel>

                    <div className='d-flex'>
                        <Form.Select
                            aria-label="Default select example"
                            className="w-50 m-2"
                            value={productDetails.category}
                            onChange={(e) => setProductDetails({ ...productDetails, category: e.target.value })}>
                            <option value="" disabled>--select a category--</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Construction Equipment">Construction Equipment</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Book">Book</option>
                            <option value="Musical Instruments">Musical Instruments</option>
                        </Form.Select>



                        <FloatingLabel
                            controlId="floatingInput3"
                            label="Price"
                            className="mb-3 w-50 m-2"
                            onChange={(e) => setProductDetails({ ...productDetails, price: e.target.value })}
                        >
                            <Form.Control value={productDetails.price} type="number" placeholder="Price" />
                        </FloatingLabel>
                    </div>

                    <div className='m-2'>
                        <Form.Check
                            inline
                            label="Available"
                            name="size"
                            type='checkbox'
                            checked={productDetails.availability}
                            // value={productDetails.availability}
                            // value={handleAvailable}
                            onChange={(e) => setProductDetails({ ...productDetails, availability: e.target.checked })}
                        />
                    </div>

                    <div className='m-2'>
                        <p className='fw-bold'>Select Size</p>
                        <div className='d-flex m-2 align-items-center'>
                            <div>
                                <button className='btn btn-light m-1' onClick={handleSize}>
                                    Free size
                                </button>
                            </div>
                            {freeSizeBtn && (
                                <div>
                                    <Form.Check
                                        inline
                                        label="S"
                                        name="size"
                                        type="checkbox"
                                        checked={sizeS} // Reflect the state of sizeS
                                        value="S"
                                        onChange={handleSizeChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="M"
                                        name="size"
                                        type="checkbox"
                                        checked={sizeM} // Reflect the state of sizeM
                                        value="M"
                                        onChange={handleSizeChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="L"
                                        name="size"
                                        type="checkbox"
                                        checked={sizeL} // Reflect the state of sizeL
                                        value="L"
                                        onChange={handleSizeChange}
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
                    <Button onClick={handleUpdates} variant="primary">
                        Edit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditItem