import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
  return (
    <>
    <div>
      <Row className='p-5 bg-secondary'>
        <Col lg={6}>
        <h4 style={{fontSize:"1.4rem",fontFamily:'cursive'}} className=''>Rentify</h4>
        <p style={{fontSize:'14px'}} className='t-sty text-justify'>Rentify makes renting easy and hassle-free. Find quality products from trusted vendors, all at affordable rates. Rent smarter with Rentify!</p>
        </Col>
        <Col lg={3} className=' t-sty '>
        <h4 className=''>Contact Us</h4>
        <div className=''>
          <p style={{fontSize:'14px'}} className='t-sty'>about@Rentify.com</p>
          <p style={{fontSize:'0.9rem',fontFamily:'-moz-initial',marginTop:'-1rem'}}>Tel +365 1234 67567</p>
          <p style={{fontSize:'0.9rem',fontFamily:'-moz-initial',marginTop:'-1rem'}}>Address:</p>
          <p style={{fontSize:'0.9rem',fontFamily:'-moz-initial',marginTop:'-1rem'}}>112 oxwM DR.mami</p>
          <p style={{fontSize:'0.9rem',fontFamily:'-moz-initial',marginTop:'-1rem'}}>mamibeach FL 331339,USA</p>
        </div>
        </Col>
        <Col lg={3} className='t-sty'> 
        <h4>Follow Us</h4>
        </Col>
      </Row>
    </div>
    </>
  )
}

export default Footer