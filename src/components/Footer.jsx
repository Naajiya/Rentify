import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
  return (
    <>
    <div style={{overflowX:'hidden'}}>
      <Row className='p-5 shadow' style={{backgroundColor:'rgb(243, 243, 243)'}}>
        <Col lg={6} className='mt-2'>
        <h4 style={{fontSize:"1.4rem",fontFamily:'cursive'}} className=''>Rentify</h4>
        <p style={{fontSize:'14px'}} className='t-sty text-justify'>Rentify makes renting easy and hassle-free. Find quality products from trusted vendors, all at affordable rates. Rent smarter with Rentify!</p>
        </Col>
        <Col lg={3} className=' t-sty mt-2 '>
        <h4 className=''>Contact Us</h4>
        <div className=''>
          <p style={{fontSize:'14px'}} className='t-sty'>about@Rentify.com</p>
          <p style={{fontSize:'0.9rem',fontFamily:'-moz-initial',marginTop:'-1rem'}}><span style={{fontFamily:'cursive'}}>Tel</span> +365 1234 67567</p>
          <p style={{fontSize:'0.9rem',fontFamily:'cursive',marginTop:'-1rem'}}>Address:</p>
          <p style={{fontSize:'0.9rem',fontFamily:'cursive',marginTop:'-1rem'}}>112 oxwM DR.mami</p>
          <p style={{fontSize:'0.9rem',fontFamily:'cursive',marginTop:'-1rem'}}>mamibeach FL 331339,USA</p>
        </div>
        </Col>
        <Col lg={3} className='t-sty mt-2'> 
        <h4>Follow Us</h4>
        <div className='d-flex '>
          <div className='me-4'>
          <i class="fa-brands fa-facebook"></i>
          </div>
          <div className='me-4'>
          <i class="fa-brands fa-square-instagram"></i>
          </div>
          <div>
          <i class="fa-brands fa-square-x-twitter"></i>
          </div>
        </div>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Footer