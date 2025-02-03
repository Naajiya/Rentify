import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import chrdar from '../assets/chrdar2.png';
import { Button, Col, Row } from 'react-bootstrap';
import BottomDrawer from '../components/BottomDrawer';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { getCartDetails } from '../../services/allApi';
import axios from 'axios';
import { CartContexts } from '../context/CartContext';




function Cart() {

  const { cartDetails, setCartDetails, increament, incrementHandler, decreamentHanldler,daysDecreament,daysIncrement } = useContext(CartContexts)

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // const [cartDetails, ] = useState([])
  console.log('cartDetails')
  console.log(cartDetails)

  const [addQuantity, setAddQunatity] = useState()
  const grandTotal = cartDetails.reduce((total, item) => total + (item.total || 0), 0);

  const [totlItems,setItems]=useState()



  useEffect(() => {
    const getCarts = async () => {
      try {
        const result = await axios.get("http://localhost:3000/get-carts", {
          headers: { Authorization: sessionStorage.getItem('token') },
        });

        if (result.status === 200) {
          console.log("res", result.data)
          console.log("Success: Retrieved cart details.");
          const updatedCart = result.data.cart.map((item) => ({
            ...item,
            quantity: item.quantity || 1,
            days: item.days || 1,
            total: (item.productId?.price || 0) * (item.quantity || 1) * (item.days || 1),
          }));
          setItems(updatedCart.length)
         console.log(updatedCart.length)
          setCartDetails(updatedCart);
        }
      } catch (err) {
        console.error("Error fetching cart data:", err);
      }
    };

    getCarts();
  }, []);



  useEffect(() => {
    // getCarts()
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = (open) => {
    setIsDrawerOpen(open);
  };




  return (
    <>
      <div className='' style={{ overflow: 'hidden' }}>
        <h2 className='text-center p-5' style={{ backgroundColor: 'rgb(232, 233, 232)', fontFamily: 'cursive', backgroundAttachment: 'fixed' }}>
          <div className='mt-5'>Your cart</div>
        </h2>

        <div className='m-3 mb-2'>
          <Table responsive className={`table ${isSmallScreen ? 'table-bordered' : ''}`}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Days</th>
                <th>Total</th>
                <th>
                  <i className="fa-solid fa-trash"></i>
                </th>
              </tr>
            </thead>
            {
              cartDetails ? cartDetails.map(details => (
                <tbody key={details._id} >
                  <Tooltip title="click" placement="bottom">

                    <tr style={{ cursor: 'pointer' }}>
                      <td onClick={() => toggleDrawer(true)} className='d-flex h-100 align-items-center'>
                        <div>
                          <img className='img-fluid' src={chrdar} alt="Placeholder" style={{ width: '10vw', maxWidth: '60px', height: '10vw', maxHeight: '80px', backgroundColor: 'gray' }} />
                        </div>
                        <div className='ms-3'>
                          <span className='fw-bold'>{details.productId.name}</span><br />
                          <span style={{ marginTop: '-10px' }}>{details.productId.price}/Day</span><br />
                          <span>Size : {details.size}</span>
                        </div>
                      </td>
                      <td>
                        <div className=' d-flex'>
                          <div className='w-50 d-flex justify-content-between'>
                            <Button onClick={() => incrementHandler(details._id)} variant="outline-light" className="text-dark fw-bold">
                              +
                            </Button>

                            {/* <input type="text" readOnly value={details.quantity} className="text-center border-light bg-light rounded m-1" style={{ width: "40px" }} /> */}
                            <input type="text" value={details.quantity} className='border border-secondary text-center bg-light rounded m-1' style={{ width: '40px' }} readOnly  />

                            <Button onClick={() => decreamentHanldler(details._id)} variant="outline-light" className="text-dark fw-bold">
                              -
                            </Button>
                          </div>
                        </div>
                      </td>
                      <td >
                        <div className='w-50 d-flex justify-content-between'>
                          <Button onClick={() => daysIncrement(details._id)} variant="outline-light" className='text-dark w-75 fs-5'>+</Button>
                          <input type="text" value={details.days} className='border border-light text-center bg-light rounded m-1' style={{ width: '40px' }} readOnly  />
                          <Button onClick={() => daysDecreament(details._id)} variant="outline-light " className='text-dark w-75 fs-5'>-</Button>
                        </div>
                      </td>
                      <td onClick={() => toggleDrawer(true)}>RS. {details.total}</td>
                     
                      <td className='text-secondary'>
                        <i className="fa-solid fa-circle-xmark"></i>
                      </td>
                    </tr>
                  </Tooltip>
                </tbody>
              ))
                :
                <div>no carts</div>
            }





          </Table>
        </div>

        <Row className='d-flex justify-content-end'>
          <Col className='d-flex justify-content-end m-2' md={12}>
            <div className={isSmallScreen ? 'w-100 m-4 p-4 border' : 'm-4 p-4 border w-50'}>
              <h4 className=' bg-light w-100 p-3 w-100'>Cart summary</h4>

              <div className=''>
                <hr />
                <div className='d-flex justify-content-between p-1'>
                  <p className='ps-3'>Total Item</p>
                  <p className=' pe-4' style={{ fontSize: '20px' }}>{totlItems}</p>
                </div>
                <div className='d-flex justify-content-between p-1'>
                  <p className='ps-3'>Delivery Charge</p>
                  <p className='pe-4' style={{ fontSize: '20px', }}>Free</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between p-1'>
                  <p className='ps-3'>Total Price</p>
                  <p className='fw-bold pe-4' style={{ fontSize: '19px' }}>₹{grandTotal}</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between p-1 '>
                  <p className='p-2 fw-bold ps-3'></p>
                  <p className='fw-bold pe-4 fw-bold pt-1' style={{ fontSize: '22px' }}></p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <BottomDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      </div>
    </>
  );
}

export default Cart;
