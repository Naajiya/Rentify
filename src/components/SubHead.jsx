import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

function SubHead() {

  const [isHoveredMen, setIsHoveredMen] = useState(false);
  const [isHoverWomen, setIsHoverWomen] = useState(false)
  return (
    <>
      <div className='d-flex justify-content-center  hover-contaier mt-2 me-4 ms-4 rounded-3' style={{ backgroundColor: 'rgb(243, 243, 243)' }}>

        {/* men */}
        <Button
          className='border border-light fw-bold hover-button m-1'
          onMouseEnter={() => setIsHoveredMen(true)}
          onMouseLeave={() => setIsHoveredMen(false)}
          variant=""
        >
          MEN
        </Button>

        {
          isHoveredMen &&
          <div
            className='dropdown-items border rounded p-3 bg-secondary  w-75'
            onMouseEnter={() => setIsHoveredMen(true)}
            onMouseLeave={() => setIsHoveredMen(false)}
          >
           <div >
              <p>items2</p>
              <p>items3</p>
           </div>
          </div>
        }


        {/* women */}
        <Button className='border border-light fw-bold hover-button m-1' onMouseEnter={() => setIsHoverWomen(true)}
          onMouseLeave={() => setIsHoverWomen(false)} variant="">WOMEN</Button>
        {
          isHoverWomen &&
          <div
            className='dropdown-items border rounded p-3 bg-secondary  w-75'
            onMouseEnter={() => setIsHoverWomen(true)}
            onMouseLeave={() => setIsHoverWomen(false)}
          >
           <div >
              <p>itemfafaf</p>
              <p>items3</p>
           </div>
          </div>
        }

        <Button className='border border-light fw-bold  m-1' variant="">VEHICLES</Button>
        <Button className='border border-light fw-bold m-1' variant="">BUUILDING CONSTRUCTORS</Button>
        <Button className='border border-light fw-bold m-1' variant="">DECORATION</Button>
        <Button className='border border-light fw-bold m-1' variant="">FURNITURE</Button>
        <Button className='border border-light fw-bold m-1' variant="">KITCHEN</Button>
        {/* <Button className='border border-light' variant="">Primary</Button> */}
      </div>
    </>
  )
}

export default SubHead