import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import chrdar from '../assets/chridar1.png'
import chrdar2 from '../assets/chrdar2.png'
import men1 from '../assets/men1.png'
import moveOne from '../assets/moveOne.png'

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/AllItemStyle.css'



function AllItems() {
    return (
        <>
            <div className='d-flex justify-content-center m-5' >
                <div className=' row d-flex justify-content-center ms-5 me-5'>
                    <div className='d-flex text-center justify-content-center '>
                        
                        <h3 style={{ fontFamily: 'cursive' }}>Execlusive Product</h3>
                    </div>
                    <Row lg={4}>
                        <Col lg={3} md={6} sm={6}> 
                            <Card style={{ width: '13rem' ,height:'19rem',}} className='p-1 mb-2' >
                                <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>
                                <div className='icon-sty text-secondary mt-1'><i class="fa-solid fa-heart"></i></div>
                                    <Card.Img className='card-img img-fluid ' variant="top" src={chrdar2} />
                                </div>
                                <Card.Body >
                                    <Card.Title >
                                        <p className='text-center' style={{fontSize:'15px', fontFamily:'cursive'}}>Pakistani salwar</p>
                                    </Card.Title>
                                    <Card.Text className='d-flex justify-content-between'>
                                        
                                        <p style={{fontFamily:'cursive',fontSize:'13px'}} className='fw-bold'>$200/day</p>
                                        <p className='bg-secondary p-1 border rounded'><i class="fa-solid fa-cart-shopping"></i></p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} md={6} sm={6}>
                            <Card style={{ width: '13rem' ,height:'19rem',}} className='p-1  shadow' >
                                <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>
                                <div className='icon-sty text-secondary mt-1'><i class="fa-solid fa-heart"></i></div>
                                    <Card.Img className='card-img img-fluid ' variant="top" src={chrdar} />
                                </div>
                                <Card.Body >
                                    <Card.Title >
                                        <p className='text-center' style={{fontSize:'15px', fontFamily:'cursive'}}>Pakistani salwar</p>
                                    </Card.Title>
                                    <Card.Text className='d-flex justify-content-between'>
                                        
                                        <p style={{fontFamily:'cursive',fontSize:'13px'}} className='fw-bold'>$200/day</p>
                                        <p><i class="fa-solid fa-cart-shopping"></i></p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} md={6}>
                            <Card style={{ width: '13rem' ,height:'19rem',}} className='p-1' >
                                <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>
                                <div className='icon-sty text-secondary mt-1'><i class="fa-solid fa-heart"></i></div>
                                    <Card.Img className='card-img img-fluid ' variant="top" src={moveOne} />
                                </div>
                                <Card.Body >
                                    <Card.Title >
                                        <p className='text-center' style={{fontSize:'15px', fontFamily:'cursive'}}>Pakistani salwar</p>
                                    </Card.Title>
                                    <Card.Text className='d-flex  justify-content-between'>
                                        
                                        <p style={{fontFamily:'cursive',fontSize:'13px'}} className='fw-normal'>$200/day</p>
                                        <p><i class="fa-solid fa-cart-shopping"></i></p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col lg={3} md={6}>
                            <Card style={{ width: '13rem' ,height:'19rem',}} className='p-1' >
                                <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>
                                <div className='icon-sty text-secondary mt-1'><i class="fa-solid fa-heart"></i></div>
                                    <Card.Img className='card-img img-fluid ' variant="top" src={men1} />
                                </div>
                                <Card.Body >
                                    <Card.Title >
                                        <p className='text-center' style={{fontSize:'15px', fontFamily:'cursive'}}>Pakistani salwar</p>
                                    </Card.Title>
                                    <Card.Text className='d-flex justify-content-between'>
                                        
                                        <p style={{fontFamily:'cursive',fontSize:'13px'}} className='fw-bold'>$200/day</p>
                                        <p><i class="fa-solid fa-cart-shopping"></i></p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} md={6}>
                            <Card style={{ width: '13rem' ,height:'19rem',}} className='p-1' >
                                <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>
                                <div className='icon-sty text-secondary mt-1'><i class="fa-solid fa-heart"></i></div>
                                    <Card.Img className='card-img img-fluid ' variant="top" src={chrdar2} />
                                </div>
                                <Card.Body >
                                    <Card.Title >
                                        <p className='text-center' style={{fontSize:'15px', fontFamily:'cursive'}}>Pakistani salwar</p>
                                    </Card.Title>
                                    <Card.Text className='d-flex justify-content-between'>
                                        
                                        <p style={{fontFamily:'cursive',fontSize:'13px'}} className='fw-bold'>$200/day</p>
                                        <p><i class="fa-solid fa-cart-shopping"></i></p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} md={6}>
                            <Card style={{ width: '13rem' ,height:'19rem',}} className='p-1' >
                                <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>
                                <div className='icon-sty text-secondary mt-1'><i class="fa-solid fa-heart"></i></div>
                                    <Card.Img className='card-img img-fluid ' variant="top" src={chrdar} />
                                </div>
                                <Card.Body >
                                    <Card.Title >
                                        <p className='text-center' style={{fontSize:'15px', fontFamily:'cursive'}}>Pakistani salwar</p>
                                    </Card.Title>
                                    <Card.Text className='d-flex justify-content-between'>
                                        
                                        <p style={{fontFamily:'cursive',fontSize:'13px'}} className='fw-bold'>$200/day</p>
                                        <p><i class="fa-solid fa-cart-shopping"></i></p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} md={6}>
                            <Card style={{ width: '13rem' ,height:'19rem',}} className='p-1' >
                                <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>
                                <div className='icon-sty text-secondary mt-1'><i class="fa-solid fa-heart"></i></div>
                                    <Card.Img className='card-img img-fluid ' variant="top" src={chrdar2} />
                                </div>
                                <Card.Body >
                                    <Card.Title >
                                        <p className='text-center' style={{fontSize:'15px', fontFamily:'cursive'}}>Pakistani salwar</p>
                                    </Card.Title>
                                    <Card.Text className='d-flex justify-content-between'>
                                        
                                        <p style={{fontFamily:'cursive',fontSize:'13px'}} className='fw-bold'>$200/day</p>
                                        <p><i class="fa-solid fa-cart-shopping"></i></p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={3} md={6}>
                            <Card style={{ width: '13rem' ,height:'19rem',}} className='p-1' >
                                <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>
                                <div className='icon-sty text-secondary mt-1'><i class="fa-solid fa-heart"></i></div>
                                    <Card.Img className='card-img img-fluid ' variant="top" src={chrdar} />
                                </div>
                                <Card.Body >
                                    <Card.Title >
                                        <p className='text-center' style={{fontSize:'15px', fontFamily:'cursive'}}>Pakistani salwar</p>
                                    </Card.Title>
                                    <Card.Text className='d-flex justify-content-between'>
                                        
                                        <p style={{fontFamily:'cursive',fontSize:'13px'}} className='fw-bold'>$200/day</p>
                                        <p><i class="fa-solid fa-cart-shopping"></i></p>
                                    </Card.Text>
                                    
                                </Card.Body>
                            </Card>
                        </Col>

                        
                    </Row>


                </div>
            </div>
        </>
    )
}

export default AllItems