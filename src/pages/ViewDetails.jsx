import React, { useEffect, useState } from 'react'
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




function ViewDetails() {

  const navigate = useNavigate();
  const { pid } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState([]);
  const [size, setSizes] = useState({ S: "", M: "", L: "" })
  console.log(size)
  const [cartSize,setCartSize]=useState()
  // console.log("cartsize",cartSize)

  const [selectSize,setSelectSize]=useState('')
  console.log(selectSize)

  const setHandle=(sizeVal)=>{
    
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


  // const handleCategory = async () => {
  //   console.log('handle');
  //   try {
  //     console.log('rr');
  //     const result = await selectCategory(category);
  //     console.log(result);
  //     if (result.status === 200) {
  //       setCategoryDetails(result.data);
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleCart = async (prod) => {
    if(selectSize){
      const reqBody = {
        productId: prod,
        quantity: 1,
        days: 1,
        size:selectSize
      };
      console.log(reqBody)
  
      try {
        const result = await axios.post('http://localhost:3000/add-to-cart', reqBody, { headers: { Authorization: sessionStorage.getItem('token') } });
        console.log("Cart Response:", result.data);
        if (result.status === 200) {
          toast.success(result.data?.message || "Added to cart!");
          navigate('/cart');
        }
      } catch (err) {
        console.error("Error adding to cart:", err.response?.data || err.message);
      }
    }else{
      toast.error('select a size')
    }

    
  };

  return (
    <>
      <Header />
      <div>
        <div className='p-5 mb-5'>
          <Row className='d-flex justify-content-center mt-5'>
            {products ? products.map(prod => (
              <div className='d-flex border p-1 justify-content-center' key={prod._id}>
                <Col lg={4} md={12} className='border text-center' style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
                  <div className='img-wrapper'>
                    <p className='cart-stylw text-light cart-icon'><i onClick={() => handleCart(prod._id)} className="fa-solid fa-cart-plus"></i></p>
                    <p style={{ fontSize: '13px' }} className='icon-sty text-success fw-bold w-25'>{prod.availability ? 'available' : 'not available'}</p>
                    <img className='img-fluid' src={`${SERVER_URL}/uploads/${prod.imgOne}`} alt="" style={{ height: '100%' }} />
                  </div>
                </Col>
                <Col className='ms-1' lg={7} md={12} style={{ backgroundColor: 'white' }}>
                  <div className='border rounded pt-2 ps-2 m-1'>
                    <p className='fs-3 fw-bold'>{prod.name}</p>
                    <div className='d-flex justify-content-between'>
                      <div className='d-flex text-bold'>
                        <div className='mt-2 me-2' style={{ fontSize: '25px' }}><i className="fa-solid fa-indian-rupee-sign"></i></div>
                        <p className='fs-3'> {prod.price}<span>/day</span></p>
                      </div>
                      <div className='p-2'>
                        <Button variant="secondary">Day</Button>
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
              </div>
            )) : <div>no details</div>}


          </Row>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          theme="colored"
        />
      </div>
    </>
  );
}

export default ViewDetails