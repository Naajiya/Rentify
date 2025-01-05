import React from 'react'
import { Col, Row } from 'react-bootstrap'
import moveOne from '../assets/chrdar2.png'
import Button from 'react-bootstrap/Button';
import '../css/AllItemStyle.css'
import { Link } from 'react-router-dom';


function ViewDetails() {
  return (
    <>
      <div>
        <div className='p-5 mb-5 ' >
          <Row className='d-flex justify-content-center mt-5'>
            <Col lg={4} md={12} className='border text-center  ' style={{ backgroundColor: 'rgb(245, 245, 245)' }}>
              <div className='img-wrapper'>
                <Link to={'/cart'}><p className='cart-stylw'><i class="fa-solid fa-cart-plus"></i></p></Link>
                <p style={{ fontSize: '13px' }} className='icon-sty text-success fw-bold w-25'>Available</p>
                
                <img className='img-fluid' src={moveOne} alt="" style={{ height: '100%', }} />
              </div>
              <div>
                <div className='d-flex justify-content-center align-items-between mb-3  ' style={{margin:'-10px'}}>
                  {/* <Button className='w-50 m-1 text-dark fw-bold' variant="secondary">ACart</Button> */}
                  {/* <Button className='w-50 m-1 text-dark fw-bold ' variant="secondary">Buy</Button> */}
                </div>
              </div>
              {/*  https://careers.inkoop.io/job_posts/js-developer-intern/applicants/XN2jbd5v4KdJQZPgxJBg1REi */}
            </Col>
            <Col lg={7} md={12} style={{ backgroundColor: 'white' }}>

              {/* product name and price */}
              <div className='border rounded pt-2 ps-2 m-1'>
                <p className='fs-5'>Western Wear For girl</p>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex text-bold'>
                    <div className='mt-2 me-2' style={{ fontSize: '25px' }}><i class="fa-solid fa-indian-rupee-sign"></i></div>
                    <p className='fs-3'> 109<span>/day</span></p>
                  </div>
                  <div className='p-2 '>
                    <Button variant="secondary">Day</Button>
                  </div>
                </div>
              </div>

              {/* product size */}
              <div className='border rounded pt-2 p-2 ps-2 m-1'>
                <p className='fw-bold'>Select Size</p>
                <div>
                  <Button className='ms-2' style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}>M</Button>
                  <Button className='ms-2' style={{ backgroundColor: 'white', borderColor: 'black', color: 'black' }}>LG</Button>
                </div>
              </div>

              {/* product Details */}
              <div className='border rounded pt-2 p-2 ps-2 m-1'>
                <p className='fw-bold'>Product details</p>
                {/* list */}
                <div style={{ fontSize: '14px' }} className='flex-column'>
                  <span>Name: Women western dress for girls</span> <br />
                  <span>Pattern: Solid</span><br />
                  <span>Sizes:</span> <br />
                  <span> (Waist size : M in, 40 in, Hip Zip:44 in)</span><br />
                  <span> (Waist size : LG in, 45 in, Hip Zip:52 in)</span>
                </div>
              </div>

            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default ViewDetails