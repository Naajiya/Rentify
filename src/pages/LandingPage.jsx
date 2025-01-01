import React from 'react'
import SubHead from '../components/SubHead'
import BgImg from '../assets/bg-rental.png'
import '../css/LandingStyle.css'
import { Col, Row } from 'react-bootstrap'
import move from '../assets/moveOneorg.jpg'
import men1 from '../assets/men1org.jpg'
import chrdar2 from '../assets/chrdar2org.jpg'
import { TypeAnimation } from 'react-type-animation';
import AllItems from '../components/AllItems'
import Advertise from '../components/Advertise'





function LandingPage() {
  return (
    <>
      <SubHead />
      <div className='parallax'>

        <Row>

          <Col lg={6} md={12}>
            <div className='d-flex flex-column justify-content-center text-center align-items-center' style={{ top: '5rem' }}>
              <h1 className='home-logo  ' style={{ marginTop: '7rem' }}> RENTIFY

              </h1>
              <span style={{ fontFamily: 'cursive', fontSize: '10px' }}>
                <TypeAnimation
                  sequence={[
                    'rent',
                    500,
                    'rent the', //  Continuing previous Text
                    500,
                    'rent the product you need',
                    500,
                    'rent the',
                    500,
                    'rent',
                    500,
                    '',
                    500,
                  ]}
                  style={{ fontSize: '2em' }}
                  repeat={Infinity}
                />
              </span>

              {/* <TypeAnimation
                sequence={['anytime', 500, 'anywhere', 500, 'welcome', 500]}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
              /> */}
            </div>


          </Col>

          <Col lg={6} md={12}>
            <div className='d-flex text-center justify-content-center'>
              <div className='style-card'>
                <div className='mt-3 m-1'>
                  <marquee>
                    <img className='img-sty m-1' src={move} alt="" />
                    <img className='img-sty m-1' src={men1} alt="" />
                    <img className='img-sty m-1' src={chrdar2} alt="" />
                    <img className='img-sty m-1' src={move} alt="" />
                    <img className='img-sty m-1' src={men1} alt="" />
                    <img className='img-sty m-1' src={chrdar2} alt="" />
                  </marquee>
                </div>
              </div>
            </div>
            {/* <TypeAnimation
              sequence={[
                ()=> <img src={move}/>,500,
                ()=> <img src={men1}/>,500,
                ()=> <img src={chrdar2}/>,500,
              ]}
              wrapper="div"
              repeat={Infinity}
            /> */}
          </Col>
        </Row>
      </div>
      {/* <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ipsum voluptate corrupti explicabo qui quia rem eligendi esse. Atque, pariatur nihil perspiciatis saepe ab similique inventore earum expedita eos voluptatibus!</h3> */}
      <Advertise />
      <AllItems />

    </>
  )
}

export default LandingPage