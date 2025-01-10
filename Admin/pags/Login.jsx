import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




function Login() {
    return (
        <>
            <div className='pt-5 bg-dark'>
                <div className='mt-3 bg-dark'>
                    <div className='bg-dark p-4'>
                        <Row className='p-3 d-flex text-center align-items-center justify-content-center'>
                            <Col className='col p-5 border' lg={6}>
                                <p className='text-light fs-1  p-2'>
                                    Login
                                </p>
                                <div className='d-flex flex-column align-items-center justify-content-center w-100 '>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3 bg-dark text-light "
                                    >
                                        <Form.Control type="email" className='bg-dark border-light text-light w-100' placeholder="name@example.com" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingPassword" className="mb-3 bg-dark text-light " label="Password">
                                        <Form.Control type="password" className='bg-dark border-light text-light w-100' placeholder="Password" />
                                    </FloatingLabel>
                                   <Link to={'/admin/dashboard'} > <Button variant="outline-secondary">login</Button></Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login