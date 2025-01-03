import React from 'react'
import { Col, Row } from 'react-bootstrap'
import moveOne from '../assets/moveOne.png'


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
              <p className='fs-4'>Western Wear For girl</p>
              <div className='d-flex text-bold'>
                <div><i class="fa-solid fa-indian-rupee-sign"></i></div>
                <p className='fw-bold'> 109<span>/day</span></p>
              </div>
            </div>

            {/* product size */}
            <div className='border rounded pt-2 ps-2 m-1'>
              <p className='fs-5'>Select Size</p>
              <div>
                
              </div>
            </div>
            
            </Col>
          </Row>
        </div>
     </div>
    </>
  )
}

export default ViewDetails