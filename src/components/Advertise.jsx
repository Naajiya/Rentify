import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../css/AdvtStyle.css'
import chair from '../assets/chair.jpg'
import tend from '../assets/tend.jpg'
import kambi from '../assets/kambi.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


function Advertise() {
    return (
        <>
            <div className='body-color p-3 border shadow mb-2'>
                <div className='d-flex text-center  '>
                    <Row lg={12}>
                        <Col lg={6} className='container ps-3 d-flex justify-content-center mt-3 p-2' style={{ width: '50%' }}>
                            <div className='box-card first border border-2'>
                                <img className='img-style img-fluid' src={chair} alt="" />
                            </div>
                            <div className='box-card'>
                                <img className='img-style img-fluid' src={tend} alt="" />
                            </div>
                            <div className='box-card'>
                                <img className='img-style img-fluid' src={kambi} alt="" />
                            </div>
                        </Col>

                        <Col lg={6} md={12} style={{width:'50%'}}>
                            <div className='p-5'>
                                <h4 style={{ fontFamily: 'cursive' }} className=''>Start renting smarter. Sign up and explore!</h4>
                                <p style={{ fontFamily: 'cursive' }}>Why buy when you can rent? Get started now!  </p>
                                <Link to={'/register'}> <Button style={{ fontFamily: 'cursive' }} variant="outline-dark">SignUp Now</Button></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Advertise