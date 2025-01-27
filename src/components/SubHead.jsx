import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import menWomen from '../assets/menwomen.jpg'
import furniture from '../assets/furnitures.jpg'
import { selectCategory } from '../../services/allApi';


function SubHead() {

  const handleCategory=async(category)=>{
    console.log(category)
    const cat=category
    console.log(cat)

    try{
      const result = await selectCategory(cat)
      if(result.status==200){
        console.log(result.data)
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <Row className='w-100 sub-head mt-1 '>
        <div className='d-flex  justify-content-center w-100  hover-contaier  mt-3 ' style={{ backgroundColor: 'rgb(255, 255, 255)', overflowX: 'auto' }}>

          {/* men */}
          <Button
            className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1'
            variant=""
            value="Men"
            style={{ fontSize: '12px', fontFamily: 'cursive'}}
            onClick={()=>handleCategory("Men")}
          >
            <img className='sub-img img-fluid border shadow' src={menWomen} alt="" />
            <p className='text-center'>Men</p>
          </Button>



          {/* Furniture */}
          <Button className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1' style={{ fontSize: '11px' }}
            variant="">
            <img className='sub-img img-fluid border shadow' src={furniture} alt="" />
            <p className='text-center'>Furniture</p>

          </Button>

          <Button className='border border-light fw-bold hover-button  m-1' style={{ fontSize: '11px' }}
            variant="">VEHICLES</Button>


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