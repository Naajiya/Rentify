import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import chrdar from '../assets/chrdar2.png'
import { useState } from 'react';
import { useEffect } from 'react';

export default function BottomDrawer({ isOpen, toggleDrawer,dtls }) {
  console.log(dtls)
  const [cartDetails,setcartDetails]=useState([])

  useEffect(()=>{
    setcartDetails(Array.isArray(dtls) ? dtls : [dtls]);
  },[dtls])

   const navigate = useNavigate();

   const handleCheckout = () => {
    // Navigate to the Address page and pass cartDetails as state
    navigate('/address', { state: { cartDetails } });
  };

  return (
    <div>
      <Drawer anchor="bottom" open={isOpen} onClose={() => toggleDrawer(false)}>
        <div className='p-4 text-center'>
          <h4>Order Now</h4>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='d-flex border mt-3 align-items-center justify-content-center p-3 w-100'>
              <img src={chrdar} alt="" className='img-fluid' style={{ height: '8rem', width: '7rem' }} />
              <div className='ms-3 p-2 rounded text-justify d-flex flex-column justify-content-start align-items-start'>
                <p> Duppetta </p>
                <p>299</p>
                <p>size <span>M</span></p>
                <span>Quantity :<span> 2 </span></span>
              </div>
            </div>
          </div>

          <div className='m-2'>
            <Button onClick={handleCheckout} color="secondary" className='fw-bold w-25'>Continue</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
