import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function Auth() {
  return (

    <div style={{ overflowX: 'hidden' }}>
      <div className=' m-5 p-1 border'>
        <div className=' border'>
          <Row style={{ height: "22rem" }} >
            <Col lg={4} >
              <div className='bg-danger h-100 text-center d-flex justify-content-center align-items-center'>
                <div>
                  <h3 className='text-light p-3'>Welcome Back!</h3>
                  <p className='text-light text-justify' style={{ fontSize: '14px' }}>to keep connet with us please login with your personal info</p>
                  {/* <Buttob></Buttob> */}
                  <button className='btn btn-light'>sign up</button>
                </div>
              </div>
            </Col>
            <Col className='text-center p-4'>
              <h3 className='text-center'>Create Account</h3>
              <div className='ms-5 m-5 mt-2 text-center d-flex flex-column justify-content-center align-items-center'>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3 w-100 h-25 bg-secondary "
                  style={{fontSize:'14px'}}
                >
                  <Form.Control type="email" placeholder="name@example.com" style={{backgroundColor:'gray'}}/>
                </FloatingLabel>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Auth