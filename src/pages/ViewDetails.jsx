import React, { useContext, useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import moveOne from '../assets/chrdar2.png'
import Button from 'react-bootstrap/Button';
import '../css/AllItemStyle.css'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { addtoCart, viewProduct } from '../../services/allApi';
import SERVER_URL from '../../services/serverUrl';
import { toast, ToastContainer } from 'react-toastify';
import Header from '../components/Header';
import axios from 'axios';
import { BadgeContext } from '../context/BadgeContext';




function ViewDetails() {
  const { countBadge, setBadge, incrementBadge } = useContext(BadgeContext);

  const navigate = useNavigate();
  const { pid } = useParams();
  const [products, setProducts] = useState([]);
  console.log(products)
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [size, setSizes] = useState({ S: "", M: "", L: "" })
  console.log(size)
  const [cartSize, setCartSize] = useState()
  // console.log("cartsize",cartSize)

  const [selectSize, setSelectSize] = useState('')
  console.log(selectSize)

  const setHandle = (sizeVal) => {

    setSelectSize(sizeVal)
    // toast.success(`selected Size ${sizeVal}`)

  }

  const getButtonStyle = (sizeValue) => {
    return selectSize === sizeValue
      ? { backgroundColor: 'gray', borderColor: 'white', color: 'black' } // Style for selected button
      : { backgroundColor: 'white', borderColor: 'gray', color: 'black' }; // Default style
  };

  useEffect(() => {
    getDetails();

  }, []);

  const getDetails = async () => {
    try {
      const result = await viewProduct(pid);
      if (result.status === 200) {
        console.log(result.data);
        setProducts(Array.isArray(result.data) ? result.data : [result.data]);
        // console.log(products)


      } else {
        console.log('no matching products');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [freeSize, setFreeSize] = useState()



  useEffect(() => {
    if (products.length > 0) {
      sizeste(); // Run sizeste() only when products are updated
      freeSize && setSelectSize('Freeize')
    }
  }, [products]); // Runs every time `products` changes

  const sizeste = () => {
    if (products.length > 0) {
      console.log(products[0].size);
      const sizes = products[0].size;
      console.log("s");
      console.log(sizes);

      if (sizes.includes("Freeize")) {
        setFreeSize("Freesize");
      } else {
        // Update sizes dynamically
        const updatedSizes = {};

        if (sizes.includes("S")) updatedSizes.S = "S";
        if (sizes.includes("M")) updatedSizes.M = "M";
        if (sizes.includes("L")) updatedSizes.L = "L";

        setSizes((prevSizes) => ({ ...prevSizes, ...updatedSizes }));
      }
    }
  };



  const [cartItems, setCartItems] = useState([])

  const handleCart = async (prod, price) => {
    const token = sessionStorage.getItem('token')
    if (!token) {
      toast.error('please login')
    }
   

    if (token) {
      if (!selectSize) {
        toast.error('Please select a size');
        return;
      }
    }



    const reqBody = {
      productId: prod,
      quantity: 1,
      days: 2,
      size: selectSize,
    };

    // Check if product already exists in cart
    // const exists = cart.some((item) => item.productId === prod && item.size === selectSize);

    // console.log("Adding to cart:", newProduct);

    try {
      const result = await axios.post('http://localhost:3000/add-to-cart', reqBody, {
        headers: { Authorization: sessionStorage.getItem('token') }
      });

      console.log("Cart Response:", result.data);

      if (result.status === 200) {
        toast.success(result.data?.message || "Added to cart!");

        // hanldeChangeStock(prod)

        if (result.data.existsInCart == false) {
          console.log('its new cart item')
          incrementBadge()
        }
      }
    } catch (err) {
      // toast.error('Please login');
      console.error("Error adding to cart:", err.response?.data || err.message);
    }
  }






  const viewDet = (prod) => {
    console.log('yessssssssssssss')
    console.log(prod)
    // onClick={() => handleCart(prod._id, prod.price, prod.availability)}
    if (prod.instock > 0) {
      // toast.error('erefedg')
      handleCart(prod._id, prod.price)
    } else {
      toast.error('outofStock Product')
    }
  }


  return (
    <>
      <Header />
      <div className='pt-5'>
        <div className='p-5 mb-5 pt-3'>
          <Row className='d-flex justify-content-center mt-5'>
            {products ? products.map(prod => (
              <Row className='d-flex border p-1 mt-5 justify-content-center' key={prod._id}>
                <Col lg={4} md={12} sm={12} className='border text-center' style={{ backgroundColor: 'rgb(245, 245, 245)', height: '25rem' }} >
                  <div className='img-wrapper'>
                    <p className='cart-stylw text-light cart-icon rounded-2 bg-dark border m-1'><i onClick={(e) => viewDet(prod)} className="fa-solid fa-cart-plus"></i></p>
                    <p style={{ fontSize: '13px' }} className='icon-sty text-success p-2 fw-bold w-25'>{prod.instock > 0 ? 'Instock' : 'Out Of Stock'}</p>
                    <img className='img-fluid' src={`${SERVER_URL}/uploads/${prod.imgOne}`} alt="" style={{ height: '90%' }} />
                  </div>
                </Col>
                <Col className='ms-1 d-flex  flex-column justify-content-center' lg={7} md={12} sm={12} style={{ backgroundColor: 'white' }} >
                  <div className='border rounded pt-2 ps-2 m-1'>
                    <p className='fs-3 fw-bold'>{prod.name}</p>
                    <div className='d-flex justify-content-between'>
                      <div className='d-flex text-bold'>
                        <div className='mt-2 me-2' style={{ fontSize: '25px' }}><i className="fa-solid fa-indian-rupee-sign"></i></div>
                        <p className='fs-3'> {prod.price}<span>/day</span></p>
                      </div>
                      <div className='p-2'>
                        {/* <Button variant="secondary">Day</Button> */}
                      </div>
                    </div>
                  </div>
                  <div className='border rounded pt-2 p-2 ps-2 m-1'>
                    <p className='fw-bold'>Select Size</p>
                    <div>


                      {freeSize && <Button className='ms-2' style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}>FreeSize</Button>}





                      {size.S && <Button onClick={() => setHandle('S')} className='ms-2' style={getButtonStyle('S')}>S</Button>}
                      {size.M && <Button onClick={() => setHandle('M')} className='ms-2' style={getButtonStyle('M')}>M</Button>}
                      {size.L && <Button onClick={() => setHandle('L')} className='ms-2' style={getButtonStyle('L')}>L</Button>}

                    </div>
                  </div>
                  <div className='border rounded pt-2 p-2 ps-2 m-1'>
                    <p className='fw-bold'>Product details</p>
                    <div style={{ fontSize: '14px' }} className='flex-column'>
                      <p>{prod.description}</p>
                    </div>
                  </div>
                </Col>
              </Row>
            )) : <div>no details</div>}


          </Row>
        </div>

      </div>
    </>
  );
}

export default ViewDetails