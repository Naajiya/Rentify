import React from 'react'
import Button from 'react-bootstrap/Button';

function SubHead() {
  return (
   <>
   <div className='d-flex justify-content-center'>
   <Button className='border border-light fw-bold' variant="">MEN</Button>
   <Button className='border border-light fw-bold' variant="">WOMEN</Button>
   <Button className='border border-light fw-bold' variant="">VEHICLES</Button>
   <Button className='border border-light fw-bold' variant="">BUUILDING CONSTRUCTORS</Button>
   <Button className='border border-light fw-bold' variant="">DECORATION</Button>
   <Button className='border border-light fw-bold' variant="">FURNITURE</Button>
   <Button className='border border-light fw-bold' variant="">KITCHEN</Button>
   {/* <Button className='border border-light' variant="">Primary</Button> */}
   </div>
   </>
  )
}

export default SubHead