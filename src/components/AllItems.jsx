import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import chrdar from '../assets/chridar1.png'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/AllItemStyle.css'



function AllItems() {
    return (
        <>
            <div className='d-flex justify-content-center' style={{ marginTop: '-10px' }}>
                <div className='m-3 row d-flex justify-content-center '>
                    <div className='d-flex text-center justify-content-center '>
                        <h2 style={{ fontFamily: 'cursive' }}>Execlusive Product</h2>
                    </div>
                    <Row>
                        <Card style={{ width: '14rem' }} >
                            <div className='img-wrapper img-fluid w-100 mt-2 d-flex text-center justify-content-center align-items-center '>
                                <Card.Img className='card-img img-fluid ' variant="top" src={chrdar} />
                            </div>
                            <Card.Body >
                                <Card.Title >
                                    <p style={{fontSize:'18px'}}>Pakistani salwar</p>
                                </Card.Title>
                                <Card.Text>
                                    <p></p>
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Row>


                </div>
            </div>
        </>
    )
}

export default AllItems