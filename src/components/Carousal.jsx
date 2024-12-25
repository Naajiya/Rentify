import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import sor from '../assets/ds.png'
import spofr from '../assets/spoffer.png'
import bigsale from '../assets/bigsale.jpg'


function Carousal() {
  return (
   <>
   <Carousel className='mt-2'>
      <Carousel.Item interval={500}>
       
       <div style={{height:'300px'}} className='w-100'><img className='img-fluid w-100' src={sor} alt="" /></div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
       
      <div style={{height:'300px'}} className='w-100'><img className='img-fluid w-100' src={spofr} alt="" /></div>

      
      </Carousel.Item>
      <Carousel.Item interval={500}>
       
      <div style={{height:'300px'}} className='w-100'><img className='img-fluid w-100' src={bigsale} alt="" /></div>

      
      </Carousel.Item>
    </Carousel>
   </>
  )
}

export default Carousal