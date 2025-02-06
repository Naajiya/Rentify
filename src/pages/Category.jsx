import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'
import chrdar2 from '../assets/chrdar2.png'
import { Card, Col, Row } from 'react-bootstrap'
import { addtoCart, selectCategory } from '../../services/allApi'
import SERVER_URL from '../../services/serverUrl'
import { toast, ToastContainer } from 'react-toastify'



function Category() {
    const { category } = useParams()
    const navigate =useNavigate

    const [categoryDetails, setCategoryDetails] = useState()

    useEffect(() => {
        handleCategory()
    }, [])

    const handleCategory = async () => {
        console.log('handle')
        try {
            console.log('rr')
            const result = await selectCategory(category)
            console.log(result)
            if (result.status == 200) {
                setCategoryDetails(result.data)
            }
        } catch (err) {
            console.log(err)
        }
    }


    const handleCart = async (prod) => {
        const token = sessionStorage.getItem("token");

        if (!token) {
            console.error("Token is missing");
            toast.error('please login')
            return;
        }

        console.log("Token Found:", token);

        const reqBody = {
            productId: prod,
            quantity: 1,
            days: 1
        };
        if (token) {
            const reqHeader = {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            };

            console.log("Sending Headers:", reqHeader);

            try {
                const result = await addtoCart(reqHeader, reqBody);
                console.log("Cart Response:", result.data);
                if (result.status == 200) {
                    toast.success(result.data?.message || "Added to cart!");
                    navigate('/cart')
                }

            } catch (err) {
                console.error("Error adding to cart:", err.response?.data || err.message);
            }
        } else {
            toast('please Login')
        }


    };



    return (
        <>
            <Header />
            <div className='pt-5'>
                <div className='pt-5'>
                    <div className='p-5'>
                        <Row className='d-flex justify-content-center'>
                            {categoryDetails ? categoryDetails.map(prod => (
                                <Col lg={3} md={6} sm={6} className=''>
                                    <Link to={`/${prod._id}/viewdetails`} className='text-decoration-none'>
                                    <Card style={{ width: '13rem', height: '20rem', }} className='p-1 mb-2 border-none' >
                                        

                                        <div className='img-wrapper img-fluid w-100  d-flex text-center justify-content-center align-items-center '>

                                            {/* <div className='icon-sty mt-1' style={{color:wishlist?'black':'gray'}} ><i onClick={()=>setWishlist(true)} class="fa-solid fa-heart"></i></div> */}
                                            <Card.Img className='card-img img-fluid ' variant="top" src={`${SERVER_URL}/uploads/${prod.imgOne}`} />
                                        </div>
                                        <Card.Body >
                                            <Card.Title >
                                                <div className='d-flex justify-content-center'><p className='text-center' style={{ fontSize: '15px', fontFamily: 'cursive' }}>{prod.name}</p></div>
                                            </Card.Title>
                                            <Card.Text className='d-flex justify-content-center'>

                                                <p style={{ fontFamily: 'cursive', fontSize: '13px' }} className='fw-bold'>${prod.price}/day</p>
                                                
                                               
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                    </Link>
                                </Col>
                            ))
                                :
                                <div className='text-danger'>no matched category</div>

                            }
                        </Row>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={1000}

                    theme="colored"

                />

            </div>
        </>
    )
}

export default Category