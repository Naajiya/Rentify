import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import chrdar from '../assets/chridar1.jpg'
import menone from '../assets/men1.jpg'
import { Col } from 'react-bootstrap';
import chrdartwo from '../assets/chrdar2.jpg'

function AllItems() {
    return (
        <>
            <div className='mt-5 '>
                <div className='mt-5 row border border-4 p-3 m-5'>
                    <div className='d-flex text-center justify-content-center m-3'><h1 className='text-success'>Popular Search</h1></div>
                    <Col>
                        <Card style={{ width: '12rem' }} className='mb-3'>
                            <Card.Img style={{height:'200px'}} className='img-fluid' variant="top" src={chrdar} />
                            <Card.Body>
                                <Card.Title>Pakistani Suit</Card.Title>
    
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '12rem' }} className='mb-3'>
                            <Card.Img style={{height:'200px'}} className='img-fluid' variant="top" src={menone} />
                            <Card.Body>
                                <Card.Title>Men Kurta</Card.Title>
    
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
    
                    </Col>

                    <Col>
                        <Card style={{ width: '12rem' }} className='mb-3'>
                            <Card.Img style={{height:'200px'}} className='img-fluid' variant="top" src={chrdartwo} />
                            <Card.Body>
                                <Card.Title> Materirall </Card.Title>
    
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
    
                    </Col>

                    <Col>
                        <Card style={{ width: '12rem' }} className='mb-3'>
                            <Card.Img style={{height:'200px'}} className='img-fluid' variant="top" src={menone} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
    
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
    
                    </Col>

                    <Col>
                        <Card style={{ width: '12rem' }} className='mb-3'>
                            <Card.Img style={{height:'200px'}} className='img-fluid' variant="top" src={menone} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
    
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
    
                    </Col>

                    <Col>
                        <Card style={{ width: '12rem' }} className='mb-3'>
                            <Card.Img style={{height:'200px'}} className='img-fluid' variant="top" src={chrdar} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
    
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '12rem' }} className='mb-3'>
                            <Card.Img style={{height:'200px'}} className='img-fluid' variant="top" src={menone} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
    
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
    
                    </Col>

                    <Col>
                        <Card style={{ width: '12rem' }} className='mb-3'>
                            <Card.Img style={{height:'200px'}} className='img-fluid' variant="top" src={chrdartwo} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
    
                                {/* <Button variant="primary">Go somewhere</Button> */}
                            </Card.Body>
                        </Card>
    
                    </Col>


                </div>
            </div>
        </>
    )
}

export default AllItems