import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function SubHead() {

  const [isHoveredMen, setIsHoveredMen] = useState(false);
  const [isHoverWomen, setIsHoverWomen] = useState(false);
  const [isHoverVehicle, setIsHoveredVehicle] = useState(false);
  const [isHoveredConstr, setIsHoveredConstr] = useState(false);
  const [isHoveredDecor, setIsHoveredDecor] = useState(false)
  const [isHoveredFurnt, setIsHoveredFurnt] = useState(false)
  const [isHoveredKitchen, setIsHoveredKitchen] = useState(false)
  return (
    <>
     <Row className='w-100'>
        <div className='d-flex  justify-content-center w-100  hover-contaier ms-2 mt-2 ' style={{ backgroundColor: 'rgb(243, 243, 243)',overflowY: 'auto', overflow:'none'}}>
  
          {/* men */}
          <Button
            className='border border-light fw-bold hover-button m-1'
            onMouseEnter={() => setIsHoveredMen(true)}
            onMouseLeave={() => setIsHoveredMen(false)}
            variant=""
            style={{fontSize:'11px'}}
          >
            MEN
          </Button>
  
          {
            isHoveredMen &&
            <div
              className='dropdown-items border rounded p-3  w-75'
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
          <Button className='border border-light fw-bold hover-button m-1' style={{fontSize:'11px'}} onMouseEnter={() => setIsHoverWomen(true)}
            onMouseLeave={() => setIsHoverWomen(false)} variant="">WOMEN</Button>
          {
            isHoverWomen &&
            <div
              className='dropdown-items border rounded p-3  w-75'
              onMouseEnter={() => setIsHoverWomen(true)}
              onMouseLeave={() => setIsHoverWomen(false)}
            >
              <div >
                <p>itemfafaf</p>
                <p>items3</p>
              </div>
            </div>
          }
  
          <Button className='border border-light fw-bold hover-button  m-1' style={{fontSize:'11px'}} onMouseEnter={() => setIsHoveredVehicle(true)}
            onMouseLeave={() => setIsHoveredVehicle(false)} variant="">VEHICLES</Button>
          {
            isHoverVehicle &&
            <div
              className='dropdown-items border rounded p-3  w-75'
              onMouseEnter={() => setIsHoveredVehicle(true)}
              onMouseLeave={() => setIsHoveredVehicle(false)}
            >
              <div >
                <p>itemfafaf</p>
                <p>items3</p>
              </div>
            </div>
          }
  
          <Button className='border border-light fw-bold m-1' style={{fontSize:'11px'}} onMouseEnter={() => setIsHoveredConstr(true)}
            onMouseLeave={() => setIsHoveredConstr(false)} variant="">BUUILDING CONSTRUCTORS</Button>
          {
            isHoveredConstr &&
            <div
              className='dropdown-items border rounded p-3  w-75'
              onMouseEnter={() => setIsHoveredConstr(true)}
              onMouseLeave={() => setIsHoveredConstr(false)}
            >
              <div >
                <p>itemfafaf</p>
                <p>items3</p>
              </div>
            </div>
          }
  
          <Button className='border border-light fw-bold m-1' style={{fontSize:'11px'}} onMouseEnter={() => setIsHoveredDecor(true)}
            onMouseLeave={() => setIsHoveredDecor(false)} variant="">DECORATION</Button>
          {
            isHoveredDecor &&
            <div
              className='dropdown-items border rounded p-3  w-75'
              onMouseEnter={() => setIsHoveredDecor(true)}
              onMouseLeave={() => setIsHoveredDecor(false)}
            >
              <div >
                <p>itemfafaf</p>
                <p>items3</p>
              </div>
            </div>
          }
  
          <Button className='border border-light fw-bold m-1' style={{fontSize:'11px'}} onMouseEnter={() => setIsHoveredFurnt(true)}
            onMouseLeave={() => setIsHoveredFurnt(false)} variant="">FURNITURE</Button>
          {
            isHoveredFurnt &&
            <div
              className='dropdown-items border rounded p-3  w-75'
              onMouseEnter={() => setIsHoveredFurnt(true)}
              onMouseLeave={() => setIsHoveredFurnt(false)}
            >
              <div >
                <p>itemfafaf</p>
                <p>items3</p>
              </div>
            </div>
          }
  
          <Button className=' border border-light m-1 fw-bold ' style={{fontSize:'11px'}} onMouseEnter={() => setIsHoveredKitchen(true)}
            onMouseLeave={() => setIsHoveredKitchen(false)} variant="">KITCHEN</Button>
          {
            isHoveredKitchen &&
            <div
              className='dropdown-items border rounded p-3  w-75'
              onMouseEnter={() => setIsHoveredKitchen(true)}
              onMouseLeave={() => setIsHoveredKitchen(false)}
            >
              <div >
                <p>itemfafaf</p>
                <p>items3</p>
              </div>
            </div>  
          }
          {/* <Button className='border border-light' variant="">Primary</Button> */}
        </div>
     </Row>
    </>
  )
}

export default SubHead