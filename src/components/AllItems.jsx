import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import chrdar from '../assets/chridar1.png'
import chrdar2 from '../assets/chrdar2.png'
import men1 from '../assets/men1.png'
import moveOne from '../assets/moveOne.png'

import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/AllItemStyle.css'
import axios from 'axios';
import SERVER_URL from '../../services/serverUrl'



function AllItems() {

    useEffect(() => {
        getRandoms()
    }, [])

    const [randomItem, setRandomItem] = useState([])


    const getRandoms = async () => {
        try {
            const response = await axios.get('http://localhost:3000/random-product')
            if (response.status == 200) {
                console.log('alltimen random ', response.data)
                setRandomItem(response.data)
            }
        } catch (err) {
            console.log(err)
        }
    }



    return (
        <>
            <div className='d-flex justify-content-center m-5' >
                <div className=' row d-flex justify-content-center ms-5 me-5'>
                    <div className='d-flex text-center justify-content-center '>

                        <h3 style={{ fontFamily: 'cursive' }}>Execlusive Product</h3>
                    </div>
                    <Row lg={4}>
                        {
                            randomItem.length > 0 && randomItem.map(prod => (
                                <Col lg={3} md={6} sm={6} className='mb-3'>
                                    <Link to={`/${prod._id}/viewdetails`} className='text-decoration-none'>
                                        <Card style={{ width: '13rem', height: '20rem', }} className='p-1' >
                                            <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>
                                                <Card.Img className='card-img img-fluid ' variant="top" src={`${SERVER_URL}/uploads/${prod.imgOne}`} />
                                            </div>
                                            <Card.Body >
                                                <Card.Title >
                                                    <p className='text-center' style={{ fontSize: '15px', fontFamily: 'cursive' }}>{prod.name}</p>
                                                </Card.Title>
                                                <Card.Text className=''>

                                                    <p style={{ fontFamily: 'cursive', fontSize: '13px' }} className='fw-bold text-center'> ₹{prod.price}/day</p>
                                                    {/* <p><i class="fa-solid fa-cart-shopping"></i></p> */}
                                                </Card.Text>

                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>

                            ))
                        }




                    </Row>


                </div>
            </div>
        </>
    )
}

export default AllItems