import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../css/AdvtStyle.css'
import chair from '../assets/chair.jpg'
import tend from '../assets/tend.jpg'
import kambi from '../assets/kambi.jpg'
import Button from 'react-bootstrap/Button';


function Advertise() {
  return (
    <>
    <div className='body-color  p-5 border shadow mb-2'>
        <div className='d-flex text-center  '>
            <Row>
                <Col lg={6} className=' container'>
                <div className='box-card first'>
                    <img className='img-style img-fluid' src={chair} alt="" />
                </div>
                <div className='box-card'>
                <img className='img-style img-fluid' src={tend} alt="" />
                </div>
                <div className='box-card'>
                <img className='img-style img-fluid' src={kambi} alt="" />
                </div>
                </Col>
                <Col lg={6}>
                <div className='p-5'>
                    <h4 style={{fontFamily:'cursive'}} className='text-info'>Start renting smarter. Sign up and explore!</h4>
                    <p style={{fontFamily:'cursive'}}>Why buy when you can rent? Get started now!  </p>
                    <Button style={{fontFamily:'cursive'}} variant="outline-dark">SignUp Now</Button>
                </div>
                </Col>
            </Row>
        </div>
    </div>
    </>
  )
}

export default Advertise