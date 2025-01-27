import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Modal from 'react-bootstrap/Modal';
import OtpInput from 'react-otp-input';
import { userLogin, userRegister } from '../../services/allApi';
import { toast, ToastContainer } from 'react-toastify';




function Auth({ insideRegister }) {

  const navigate = useNavigate()

  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" })
  console.log(userDetails)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRegister = async (e) => {
    e.preventDefault()
    const { username, email, password } = userDetails
    if (username && email && password) {

      try {
        const result = await userRegister(userDetails)
        console.log(result)

        if (result.status == 200) {
          // Ensure state updates
          setUserDetails(() => ({ username: "", email: "", password: "" }));
          toast.success('Registered Successfully')
          
          navigate('/login')
          
        } else {
          if (result.status == 400) {
            toast.warning(result.response.data)
            // Ensure state updates
          setUserDetails(() => ({ username: "", email: "", password: "" }));
          }
        }

      } catch (err) {
        console.error('Error during registration:', err);
      }

    }else{
      toast.error('enter all fields')
    }
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    if (userDetails.email && userDetails.password) {
      // api call
      // handle run time error
      try {
        const result = await userLogin(userDetails)
        console.log(result)

        if (result.status == 200) {
          // to store user and token details to sessionstorage (when the tab close it empty)
          sessionStorage.setItem("user", JSON.stringify(result.data.user))
          sessionStorage.setItem("token", result.data.token)
          // setIsAuthorizes(true)
          // setIsLogin(true)

          // only redirect to home after 500 seconds 
          // spinner
          setTimeout(()=>{
            // setIsLogin(false)
            setUserDetails({ username: "", email: "", password: "" })
            navigate('/')
          },500)
         

        } else {
          if (result.status == 404) {
            toast.error(result.response.data)
          }
        }

      } catch (err) {
        console.log(err)
      }


    } else {
      toast.warning("please enter username and password")
    }
  }


      return (

        <div style={{ overflow: 'hidden' }} className='pt-5'>
          <div className="pt-4">
            <div className=' ms-5 me-5 mt-4 mb-3 p-1 shadow' style={{ backgroundColor: 'rgb(243, 243, 243)' }}>
              <div className=' '>
                <Row style={{ backgroundColor: 'hsl(0, 0.00%, 100.00%)', overflow: 'hidden' }} >
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
                  <Col className='text-center p-4 ' style={{ height: '100%' }}>
                    <h3 className='text-center ' style={{ fontFamily: 'cursive' }}> {insideRegister ? 'Create Account' : 'Login '} </h3>
                    <div className='ms-3 m-2 mt-4 text-center d-flex flex-column justify-content-center align-items-center'>
                      {insideRegister &&

                        // username
                        <FloatingLabel
                          controlId="username"
                          label="username"
                          className="mb-3 w-100 text-center"
                          style={{ fontSize: '12px', backgroundColor: 'white !important' }}
                        >
                          <Form.Control type="text" onChange={(e) => { setUserDetails({ ...userDetails, username: e.target.value }) }} placeholder="username" style={{ backgroundColor: 'rgb(243, 243, 243)', border: 'none', borderRadius: '1rem' }} />
                        </FloatingLabel>}

                      {/* email */}
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3 w-100 text-center"
                        style={{ fontSize: '12px', backgroundColor: 'white !important' }}
                      >
                        <Form.Control type="email" onChange={(e) => { setUserDetails({ ...userDetails, email: e.target.value }) }} placeholder="name@example.com" style={{ backgroundColor: 'rgb(243, 243, 243)', border: 'none', borderRadius: '1rem' }} />
                      </FloatingLabel>

                      {/* password */}

                      <FloatingLabel
                        controlId="password"
                        label="password"
                        className="mb-3 w-100 text-center"
                        style={{ fontSize: '12px', backgroundColor: 'white !important' }}
                      >
                        <Form.Control type="email" onChange={(e) => { setUserDetails({ ...userDetails, password: e.target.value }) }} placeholder="password" style={{ backgroundColor: 'rgb(243, 243, 243)', border: 'none', borderRadius: '1rem' }} />
                      </FloatingLabel>

                      {/* {
                    insideRegister &&
                    <div className='d-flex justify-content-center w-100 h-100'>
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
  
                    </div>} */}

                    {
                      insideRegister ?
                      <Button onClick={handleRegister} style={{ fontSize: '0.7rem', fontFamily: 'revert' }} className='shadow' variant="dark"> SIGN UP</Button>
                      :
                      <Button onClick={handleLogin} style={{ fontSize: '0.7rem', fontFamily: 'revert' }} className='shadow' variant="dark"> SIGN IN</Button>

                    }
                      {/* <Link>
                      <Button style={{ fontSize: '0.7rem', fontFamily: 'revert' }} className='shadow' variant="dark"> SIGN {insideRegister ? 'UP' : 'IN'} </Button>
                      </Link> */}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>

          {/* <Modal show={show} onHide={handleClose}>
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

      </Modal> */}
      <ToastContainer
          position="top-center"
          autoClose={2000}

          theme="colored"

        />


        </div>
      )
    }

    export default Auth