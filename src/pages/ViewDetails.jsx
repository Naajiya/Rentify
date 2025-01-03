import React from 'react'
import { Col, Row } from 'react-bootstrap'
import moveOne from '../assets/moveOne.png'
import Button from 'react-bootstrap/Button';


function ViewDetails() {
  return (
    <>
     <div>
        <div className='p-3' >
          <Row className=''>
            <Col lg={4} className='border text-center p-4 ms-3' style={{backgroundColor:'rgb(245, 245, 245)'}}>
              <img src={moveOne} alt="" />
            </Col>
            <Col lg={7} style={{backgroundColor:'white'}}>

            {/* product name and price */}
            <div className='border rounded pt-2 ps-2 m-1'>
              <p className='fs-5'>Western Wear For girl</p>
              <div className='d-flex text-bold'>
                <div className='mt-2 me-2' style={{fontSize:'25px'}}><i class="fa-solid fa-indian-rupee-sign"></i></div>
                <p className='fs-3'> 109<span>/day</span></p>
              </div>
            </div>

            {/* product size */}
            <div className='border rounded pt-2 p-2 ps-2 m-1'>
              <p className='fw-bold'>Select Size</p>
              <div>
              <Button className='ms-2' style={{backgroundColor:'white',borderColor:'black',color:'black'}}>M</Button>
              <Button className='ms-2' style={{backgroundColor:'white',borderColor:'black',color:'black'}}>LG</Button>
              </div>
            </div>

            {/* product Details */}
            <div className='border rounded pt-2 p-2 ps-2 m-1'>
              <p className='fw-bold'>Product details</p>
            </div>
            
            </Col>
          </Row>
        </div>
     </div>
    </>
  )
}

export default ViewDetails