import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import chrdar from '../assets/chrdar2.png'

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
      <Drawer anchor="bottom" open={state} onClose={toggleDrawer(false)}>
        <div className='p-4 text-center'>
            <h6>Order  Now</h6>
            <div className='d-flex align-items-center justify-content-center bg-secondary'>
              <img src={chrdar} alt="" className='img-fluid' style={{height:'7rem',width:'5rem'}}/>
              <div className=''><p>Salwar duppetta</p>
              <p>299</p>
              <p>size <span>M</span></p>
              </div>
           </div>
        </div>
      </Drawer>
    </div>
  );
}
