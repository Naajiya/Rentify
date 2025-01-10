import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function Login() {
    return (
        <>
            <div className='pt-5 bg-dark'>
                <div className='mt-3 bg-dark'>
                    <div className='bg-dark p-4'>
                        <Row className='p-3 d-flex text-center align-items-center justify-content-center'>
                            <Col className='col' lg={6}>
                                <p className='text-light fs-1 border border-light p-2'>
                                    Login
                                </p>
                                <div>
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3 bg-dark"
                                    >
                                        <Form.Control type="email" className='bg-dark border-light text-light' placeholder="name@example.com" />
                                    </FloatingLabel>
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
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