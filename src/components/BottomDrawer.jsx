import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import chrdar from '../assets/chrdar2.png'
import { Link } from 'react-router-dom';

export default function BottomDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };



  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open Bottom Drawer</Button>
      <Drawer  anchor="bottom" open={state} onClose={toggleDrawer(false)}>
        <div className='p-4 text-center'>
          <h4>Order  Now</h4>
          <div className='d-flex align-items-center justify-content-center'>
            <div className='d-flex border mt-3 align-items-center justify-content-center p-3 w-100' >
              <img src={chrdar} alt="" className='img-fluid' style={{ height: '8rem', width: '7rem' }} />
              <div className='ms-3 p-2 rounded text-justify d-flex flex-column justify-content-start align-items-start '>
                <p> Duppetta  </p>
                <p>299</p>
                <p>size <span>M</span>
                </p>
                <span>Quantity :<span> 2 </span></span>
              </div>
            </div>
          </div>

          <div className='m-2'>
            <Link to={'/address'}><Button color="secondary" className='fw-bold w-25'>Continue</Button></Link>
            </div>
        </div>
      </Drawer>
    </div>
  );
}
