import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
    return (
        <>

            <Navbar className="bg-body-tertiary justify-content-between">
                <div>
                    <p className='fs-3 ms-3' style={{ fontFamily: 'fantasy', fontWeight: '2px' }}>RENTIFY</p>
                </div>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Search rentify"
                                    className="rounded"
                                    style={{
                                        fontSize: "14px",
                                        paddingLeft: "30px" // Adds space for the icon
                                    }}
                                />
                                <i
                                    className="fa-solid fa-magnifying-glass fa-1x"
                                    style={{
                                        position: "absolute",
                                        left: "10px",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        color: "#ccc"
                                    }}
                                ></i>
                            </InputGroup>


                        </Col>
                        <Col xs="auto" className='me-5 d-flex '>
                       <div className='me-2'> <i class="fa-solid fa-bag-shopping "></i></div>
                       <div className='ms-2'> <i class="fa-solid fa-user"></i></div>
                        </Col>
                        
                    </Row>
                </Form>
            </Navbar>
        </>
    )
}

export default Header