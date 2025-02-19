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
// import { preview } from 'vite';




function EditItem({ pro }) {
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

    const [img_one,setImageOne]=useState('')
    const [img_two, setImgTwo]=useState('')
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
        const { Freeize, S, M, L } = productDetails.size;
        if (S) {
            setSizeS(true)
        }
        // setSizeS(S || false); // Set checkbox state based on productDetails
        setSizeM(M || false);
        setSizeL(L || false);
        setSizeFreeize(Freeize || false);

        setShow(true);
    };


    // const handleSize = () => {
    //     setProductDetails((prev) => {
    //         const newSize = prev.size.includes("Freeize") ? [] : ["Freeize"];
    //         return { ...prev, size: newSize };
    //     });
    //     setFreeSizeBtn(true);

    // }
    const handleSize = () => {
        setProductDetails((prev) => {
            const newSize = prev.size.includes("Free size") ? [] : ["Free size"];
            return { ...prev, size: newSize };
        });
        setFreeSizeBtn(prev => !prev);
    };
    

    // const handleSizeChange = (e) => {
    //     const { value, checked } = e.target;
    //     setProductDetails(prevDetails => {
    //         const updatedSizes = checked 
    //             ? [...prevDetails.size, value] 
    //             : prevDetails.size.filter(size => size !== value);
    
    //         return { ...prevDetails, size: updatedSizes };
    //     });
    // };
    
    const handleSizeChange = (e) => {
        const { value, checked } = e.target;
        setProductDetails(prevDetails => {
            const updatedSizes = checked 
                ? [...prevDetails.size.filter(size => size !== "Free size"), value] 
                : prevDetails.size.filter(size => size !== value);
    
            return { ...prevDetails, size: updatedSizes };
        });
    };
    



    const handleUpdates = async () => {
        const { id, name, description, category, price, size, availability, imgOne, imgTwo } = productDetails;
        console.log(size)
    
        if (name && description && category && price && size) {
            const sizeArray = Array.isArray(size) ? size : Object.keys(size).filter(key => size[key]);
    
            const reqBody = new FormData();
            reqBody.append("name", name);
            reqBody.append("description", description);
            reqBody.append("category", category);
            reqBody.append("price", price);
            reqBody.append("size", JSON.stringify(sizeArray));
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
                        'Content-Type': 'multipart/form-data', // Ensure correct content type for file uploads
                    },
                });
    
                if (result.status === 200) {
                    alert('Product updated successfully');
                    handleClose(); // Close the modal after successful update
                }
            } catch (err) {
                console.error('Update failed:', err.response?.data || err.message);
            }
        } else {
            alert('Please fill all required fields');
        }
    };

    // Ensure the updateProduct function is correctly defined to accept id, reqBody, and reqHeader.

    const handleResponse = (data) => {
        // Parse the JSON string fields back into objects
        data.category = JSON.parse(data.category);
        data.size = JSON.parse(data.size);

        console.log("Parsed Category:", data.category);
        console.log("Parsed Size:", data.size);

        // Now you can work with the parsed objects
        // Example: Updating the product details state with the parsed data
        setProductDetails((prevDetails) => ({
            ...prevDetails,
            category: data.category,
            size: data.size
        }));
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
                            <div className=''><button className='btn btn-light m-1' onClick={handleSize} >free size</button></div>
                            {
                                freeSizeBtn &&
                                <div>
                                    <Form.Check
                                        inline
                                        label="S"
                                        name="size"
                                        type='checkbox'
                                        checked={sizeS}
                                        value="S"
                                        onChange={handleSizeChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="M"
                                        name="size"
                                        type='checkbox'
                                        value="M"
                                        checked={sizeM}
                                        onChange={handleSizeChange}
                                    />
                                    <Form.Check
                                        inline
                                        label="L"
                                        name="size"
                                        type='checkbox'
                                        value="L"
                                        checked={sizeL}
                                        onChange={handleSizeChange}
                                    />
                                </div>
                            }

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