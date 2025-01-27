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

function EditItem({ pro }) {

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
    // free size
    const [freeSizeBtn, setFreeSizeBtn] = useState(true)

    // image updation
    const [preview, setPreview] = useState(false)
    const [isValidfile, setIsValidfile] = useState(false);
    

    // modal open
    const handleShow = () => {
        console.log(productDetails);
        const { Freeize, S, M, L } = productDetails.size; // Safely destructure
        if (S) {
            setSizeS(true)
        }
        // setSizeS(S || false); // Set checkbox state based on productDetails
        setSizeM(M || false);
        setSizeL(L || false);
        setSizeFreeize(Freeize || false);

        setShow(true);
    };


    const handleSize = () => {
        setProductDetails((prev) => {
            const newSize = prev.size.includes("Freeize") ? [] : ["Freeize"];
            return { ...prev, size: newSize };
        });
        setFreeSizeBtn(true);

    }

    const handleSizeChange = (e) => {
        const { value, checked } = e.target;

        setProductDetails((prevDetails) => {
            const updatedSizes = {
                ...prevDetails.size, // Copy the existing sizes
                [value]: checked,    // Update the specific size based on the checkbox state
            };

            return { ...prevDetails, size: updatedSizes }; // Update the product details with the modified sizes
        });

        // Update individual size states
        if (value === "S") setSizeS(checked);
        if (value === "M") setSizeM(checked);
        if (value === "L") setSizeL(checked);
        if (value === "Freeize") setSizeFreeize(checked);
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
                            value={
                                Object.keys(productDetails.category).find(
                                    (key) => productDetails.category[key] === true
                                ) || ""
                            } // Find the category with a value of true
                            onChange={(e) => {
                                const selectedCategory = e.target.value;
                                const updatedCategory = {
                                    Men: false,
                                    Women: false,
                                    Furniture: false,
                                    [selectedCategory]: true, // Set the selected category to true
                                };

                                setProductDetails({
                                    ...productDetails,
                                    category: updatedCategory,
                                });
                            }}
                        >
                            <option value="" disabled>
                                --select a category--
                            </option>
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
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditItem