import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import menWomen from '../assets/menwomen.jpg'
import furniture from '../assets/furnitures.jpg'
import { selectCategory } from '../../services/allApi';
import womenFash from '../assets/fashionWomen.jpg'
import bookss from '../assets/bookss.jpg'
import constructn from '../assets/construct.jpg'
import elctro from '../assets/electrncs.png'
import musics from '../assets/music.jpg'
import { Link, useNavigate } from 'react-router-dom';



function SubHead() {

  const navigate = useNavigate()

  const [categoryDetails, setCategoryDetails] = useState()



  const [men, setMen] = useState('Men')
  const [furnitures, setFurniture] = useState('Furniture')
  const [women, setWomen] = useState('Women')
  const [construction,setConstruction]=useState('Construction Equipment')
  const [electronics,setElectronics]=useState('Electronics')
  const [book,setBook]=useState('Book')
  const [music,setMusic]=useState('Musical Instruments')

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
              style={{ fontSize: '12px', fontFamily: 'cursive' }}

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


         <Link to={`/${construction}/category`} className='text-decoration-none'>
            <Button className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1' style={{ fontSize: '11px' }}
              variant="">
              <img className='sub-img img-fluid border shadow' src={constructn} alt="" />
              <p className='text-center'>Construction Equipment</p>
  
            </Button>
         </Link>


         <Link to={`/${electronics}/category`} className='text-decoration-none'>
            <Button className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1' style={{ fontSize: '11px' }}
              variant="">
              <img className='sub-img img-fluid border shadow' src={elctro} alt="" />
              <p className='text-center'>Electronics</p>
  
            </Button>
         </Link>

         <Link to={`/${book}/category`} className='text-decoration-none'>
            <Button className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1' style={{ fontSize: '11px' }}
              variant="">
              <img className='sub-img img-fluid border shadow' src={bookss} alt="" />
              <p className='text-center'>Book</p>
  
            </Button>
         </Link>


         <Link to={`/${music}/category`} className='text-decoration-none'>
            <Button className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1' style={{ fontSize: '11px' }}
              variant="">
              <img className='sub-img img-fluid border shadow' src={musics} alt="" />
              <p className='text-center'>Music Instruments</p>
  
            </Button>
         </Link>

          {/* <Button className='border border-light' variant="">Primary</Button> */}
        </div>
      </Row>
    </>
  )
}

export default SubHead