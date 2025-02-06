import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import menWomen from '../assets/menwomen.jpg'
import furniture from '../assets/furnitures.jpg'
import { selectCategory } from '../../services/allApi';
import womenFash from '../assets/fashionWomen.jpg'

import { Link, useNavigate } from 'react-router-dom';



function SubHead() {

  const navigate = useNavigate()

  const [categoryDetails,setCategoryDetails]=useState()

  

  const [men,setMen]=useState('Men')
  const [furnitures,setFurniture]=useState('Furniture')
  const [women,setWomen]=useState('Women')
  return (
    <>
      <Row className='w-100 sub-head mt-1 '>
        <div className='d-flex  justify-content-center w-100  hover-contaier  mt-3 ' style={{ backgroundColor: 'rgb(255, 255, 255)', overflowX: 'auto' }}>

          {/* men */}
          
           <Link to={`/${men}/category`} className='text-decoration-none'>
              <Button
                className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1'
                variant=""
                value="Men"
                style={{ fontSize: '12px', fontFamily: 'cursive'}}
                
              >
                <img className='sub-img img-fluid border shadow' src={menWomen} alt="" />
                <p className='text-center'>Men</p>
              </Button>
           </Link>
        



          {/* Furniture */}
         <Link to={`/${furnitures}/category`} className='text-decoration-none'>
            <Button className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1' style={{ fontSize: '11px' }}
              variant="">
              <img className='sub-img img-fluid border shadow' src={furniture} alt="" />
              <p className='text-center'>Furniture</p>
  
            </Button>
         </Link>

         <Link to={`/${women}/category`} className='text-decoration-none'>
            <Button className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1' style={{ fontSize: '11px' }}
              variant="">
              <img className='sub-img img-fluid border shadow' src={womenFash} alt="" />
              <p className='text-center'>Women</p>
  
            </Button>
         </Link>


          <Button className='border border-light fw-bold m-1' style={{ fontSize: '11px' }}
            variant="">BUUILDING CONSTRUCTORS</Button>


          <Button className='border border-light fw-bold m-1' style={{ fontSize: '11px' }}
            variant="">DECORATION</Button>


          <Button className='border border-light fw-bold m-1' style={{ fontSize: '11px' }}
            variant="">FURNITURE</Button>


          <Button className=' border border-light m-1 fw-bold ' style={{ fontSize: '11px' }}
            variant="">KITCHEN</Button>

          {/* <Button className='border border-light' variant="">Primary</Button> */}
        </div>
      </Row>
    </>
  )
}

export default SubHead