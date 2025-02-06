import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure CSS is imported
import { userLogin, userRegister } from '../../services/allApi';

function Auth({ insideRegister }) {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ username: "", email: "", password: "" });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Log state updates for debugging
  useEffect(() => {
    console.log('User details updated:', userDetails);
  }, [userDetails]);

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userDetails;
    if (username && email && password) {
      try {
        const result = await userRegister(userDetails);
        console.log(result);

        if (result.status === 200) {
          // Reset state
          setUserDetails({ username: "", email: "", password: "" });
          toast.success('Registered Successfully');

          // Delay navigation to allow state update to reflect
          setTimeout(() => {
            navigate('/login');
          }, 500);
        } else if (result.status === 400) {
          toast.warning(result.response.data);
          setUserDetails({ username: "", email: "", password: "" });
        }
      } catch (err) {
        console.error('Error during registration:', err);
        toast.error('Registration failed. Please try again.');
      }
    } else {
      toast.error('Please fill all fields');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (userDetails.email && userDetails.password) {
      try {
        const result = await userLogin(userDetails);
        console.log(result);

        if (result.status === 200) {
          sessionStorage.setItem("user", JSON.stringify(result.data.user));
          sessionStorage.setItem("token", result.data.token);
          console.log(result.data.token);
          console.log(JSON.stringify(result.data.user));

          // Reset state and navigate after a delay
          setTimeout(() => {
            setUserDetails({ username: "", email: "", password: "" });
            navigate('/');
          }, 500);
        } else if (result.status === 404) {
          toast.error(result.response.data);
        }
      } catch (err) {
        console.log(err);
        toast.error('Login failed. Please try again.');
      }
    } else {
      toast.warning("Please enter email and password");
    }
  };

  return (
    <div style={{ overflow: 'hidden' }} className='pt-5'>
      <div className="pt-4">
        <div className='ms-5 me-5 mt-4 mb-3 p-1 shadow' style={{ backgroundColor: 'rgb(243, 243, 243)' }}>
          <div className=''>
            <Row style={{ backgroundColor: 'hsl(0, 0.00%, 100.00%)', overflow: 'hidden' }}>
              <Col lg={4} style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <div className='p-2 h-100 text-center d-flex justify-content-center align-items-center' style={{ backgroundColor: 'rgb(243, 243, 243)' }}>
                  <div>
                    <h3 className='p-1' style={{ fontFamily: 'cursive' }}>{insideRegister ? 'Welcome !' : 'Hello, Friend!'}</h3>
                    <p className='text-justify p-2' style={{ fontSize: '14px' }}>{insideRegister ? 'To keep connected with us please login with your personal info' : 'Enter your personal details and start journey with us'}</p>
                    <Link to={insideRegister ? '/login' : '/register'}>
                      <button style={{ fontSize: '0.7rem', fontFamily: 'revert' }} className='btn btn-dark shadow mb-2'>SIGN {insideRegister ? 'IN' : 'UP'}</button>
                    </Link>
                  </div>
                </div>
              </Col>
              <Col className='text-center p-4' style={{ height: '100%' }}>
                <h3 className='text-center' style={{ fontFamily: 'cursive' }}>{insideRegister ? 'Create Account' : 'Login'}</h3>
                <div className='ms-3 m-2 mt-4 text-center d-flex flex-column justify-content-center align-items-center'>
                  {insideRegister && (
                    <FloatingLabel
                      controlId="username"
                      label="username"
                      className="mb-3 w-100 text-center"
                      style={{ fontSize: '12px', backgroundColor: 'white !important' }}
                    >
                      <Form.Control
                        type="text"
                        value={userDetails.username}
                        onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })}
                        placeholder="username"
                        style={{ backgroundColor: 'rgb(243, 243, 243)', border: 'none', borderRadius: '1rem' }}
                      />
                    </FloatingLabel>
                  )}
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3 w-100 text-center"
                    style={{ fontSize: '12px', backgroundColor: 'white !important' }}
                  >
                    <Form.Control
                      type="email"
                      value={userDetails.email}
                      onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                      placeholder="name@example.com"
                      style={{ backgroundColor: 'rgb(243, 243, 243)', border: 'none', borderRadius: '1rem' }}
                    />
                  </FloatingLabel>
                  <FloatingLabel
                    controlId="password"
                    label="password"
                    className="mb-3 w-100 text-center"
                    style={{ fontSize: '12px', backgroundColor: 'white !important' }}
                  >
                    <Form.Control
                      type="password"
                      value={userDetails.password}
                      onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
                      placeholder="password"
                      style={{ backgroundColor: 'rgb(243, 243, 243)', border: 'none', borderRadius: '1rem' }}
                    />
                  </FloatingLabel>
                  {insideRegister ? (
                    <Button onClick={handleRegister} style={{ fontSize: '0.7rem', fontFamily: 'revert' }} className='shadow' variant="dark">SIGN UP</Button>
                  ) : (
                    <Button onClick={handleLogin} style={{ fontSize: '0.7rem', fontFamily: 'revert' }} className='shadow' variant="dark">SIGN IN</Button>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="colored"
      />
    </div>
  );
}

export default Auth;