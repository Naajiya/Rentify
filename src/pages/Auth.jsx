import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';




function Auth({ insideRegister }) {

  const [value, setValue] = useState('');
  const [otp, setOtp] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <div style={{ overflow: 'hidden' }}>
      <div className=' ms-5 me-5 mt-4 mb-3 p-1 shadow' style={{ backgroundColor: 'rgb(243, 243, 243)' }}>
        <div className=' '>
          <Row style={{ backgroundColor: 'hsl(0, 0.00%, 100.00%)', height: '25rem', overflow: 'hidden' }} >
            <Col lg={4} style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
              <div className='p-2 h-100 text-center d-flex justify-content-center align-items-center' style={{ backgroundColor: 'rgb(243, 243, 243)' }}>
                <div>
                  <h3 className=' p-1 ' style={{ fontFamily: 'cursive' }}> {insideRegister ? ' Welcome Back!' : 'Hello,Friend!'}</h3>
                  <p className=' text-justify p-2 ' style={{ fontSize: '14px' }}> {insideRegister ? 'To keep connet with us please login with your personal info' : 'Enter your personal details and start journey with us'}</p>
                  {/* <Buttob></Buttob> */}
                  <Link to={insideRegister ? '/login' : '/register'}> <button style={{ fontSize: '0.7rem', fontFamily: 'revert' }} className='btn btn-dark shadow mb-2'>SIGN {insideRegister ? 'IN' : 'UP'}</button></Link>
                </div>
              </div>
            </Col>
            <Col className='text-center p-4'>
              <h3 className='text-center ' style={{ fontFamily: 'cursive' }}> {insideRegister ? 'Create Account' : 'Login '} </h3>
              <div className='ms-5 m-2 mt-4 text-center d-flex flex-column justify-content-center align-items-center'>
                {insideRegister && <FloatingLabel
                  controlId="username"
                  label="username"
                  className="mb-3 w-100 text-center"
                  style={{ fontSize: '12px', backgroundColor: 'white !important' }}
                >
                  <Form.Control type="text" placeholder="username" style={{ backgroundColor: 'rgb(243, 243, 243)', border: 'none', borderRadius: '1rem' }} />
                </FloatingLabel>}

                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3 w-100 text-center"
                  style={{ fontSize: '12px', backgroundColor: 'white !important' }}
                >
                  <Form.Control type="email" placeholder="name@example.com" style={{ backgroundColor: 'rgb(243, 243, 243)', border: 'none', borderRadius: '1rem' }} />
                </FloatingLabel>

                <FloatingLabel
                  controlId="password"
                  label="password"
                  className="mb-3 w-100 text-center"
                  style={{ fontSize: '12px', backgroundColor: 'white !important' }}
                >
                  <Form.Control type="email" placeholder="password" style={{ backgroundColor: 'rgb(243, 243, 243)', border: 'none', borderRadius: '1rem' }} />
                </FloatingLabel>

                {
                  insideRegister &&
                  <div className='d-flex justify-content-between w-100 h-100'>
                    <label></label>

                    <PhoneInput
                      international
                      countryCallingCodeEditable={false}
                      defaultCountry="RU"
                      value={value}
                      onChange={setValue}
                      className='mb-2 w-50 h-100 mt-1'
                      style={{ width: "200px", border: 'none' }} />

                    <button onClick={handleShow} className='btn ms-2 fw-bold w-25'>get otp</button>

                  </div>}

                <Link><Button style={{ fontSize: '0.7rem', fontFamily: 'revert' }} className='shadow' variant="dark"> SIGN {insideRegister ? 'UP' : 'IN'} </Button></Link>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
          <div className='text-center d-flex justify-content-center align-items-center w-100 h-100 '>
            <OtpInput
              value={otp}
              onChange={setOtp}
              inputType='number'
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} 
              style={{width:'4rem', height:'4rem'}}
              className='text-center'
              
              />}
            />
          </div>
          <div className='text-center'>
            <Button variant='dark' className='m-3'>Verify</Button>
          </div>
        </Modal.Body>

      </Modal>


    </div>
  )
}

export default Auth