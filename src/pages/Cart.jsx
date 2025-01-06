import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import chrdar from '../assets/chrdar2.png'
import { Button, Col, Row } from 'react-bootstrap';
import BottomDrawer from '../components/BottomDrawer';




function Cart() {

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const helo = () => {
    alert('hello welcome to cart')
  }


  return (
    <>
      <div className='' style={{ overflow: 'hidden' }}>
        <h2 className='text-center p-5' style={{ backgroundColor: 'rgb(232, 233, 232)', fontFamily: 'cursive', backgroundAttachment: 'fixed' }}>
          <div className='mt-5'>Your Cart</div>
        </h2>


        <div className='m-3 mb-2'>
          <Table responsive className={`table ${isSmallScreen ? 'table-bordered' : ''}`}  >
            <thead >
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Days</th>
                {/* <th>Price</th> */}
                <th>Total</th>
                <th><i class="fa-solid fa-trash"></i> </th>

              </tr>
            </thead>
            <tbody>
              <tr onClick={helo} >
                <td className='d-flex h-100 align-items-center' >
                  <div>
                    <img className='img-fluid' src={chrdar} alt="Placeholder" style={{ width: '10vw', maxWidth: '50px', height: '10vw', maxHeight: '80px', backgroundColor: 'gray  ' }} />
                  </div>
                  <div className='ms-3'>
                    <span className='fw-bold'>Dupatta Set</span><br />
                    <span style={{ marginTop: '-10px' }}>299/Day</span><br />
                    <span>M,silk</span>
                  </div>
                </td>
                <td>
                  <div className=' d-flex ' >
                    <div className='w-50 d-flex  justify-content-between'>
                      <Button variant="outline-light" className='text-dark w-75 fs-5'>+</Button>
                      <input type="text" className='border border-light text-center bg-light rounded m-1' style={{ width: '40px' }} readOnly value={0} />
                      <Button variant="outline-light " className='text-dark w-75 fs-5'>-</Button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className='w-50 d-flex  justify-content-between'>
                    <Button variant="outline-light" className='text-dark w-75 fs-5'>+</Button>
                    <input type="text" className='border border-light text-center bg-light rounded m-1' style={{ width: '40px' }} readOnly value={1} />
                    <Button variant="outline-light " className='text-dark w-75 fs-5'>-</Button>
                  </div>
                </td>
                <td>RS. 299</td>

                <td className='text-secondary'><i class="fa-solid fa-circle-xmark "></i></td>

              </tr>


            </tbody>
          </Table>
        </div>

        {/* <div className=' d-flex justify-content-end'>
          <div className='m-5 p-5 border w-25 '>
            <h5 className='m-1 bg-light p-1 w-100'>Order summary</h5>
           
            <p>Total price</p>
            <hr />
            <p>total item</p>
            <hr />
          </div>
       </div> */}
        <Row className='d-flex justify-content-end' >
          <Col className='d-flex justify-content-end m-2' md={12}>
            {/* 'm-4 p-4 border w-50 ' */}
            <div className={isSmallScreen ? 'w-100 m-4 p-4 border' : 'm-4 p-4 border w-50 '}>
              <h4 className=' bg-light w-100 p-3 w-100'>Order summary</h4>

              <div className=''>
                <hr />
                <div className='d-flex justify-content-between p-1'>
                  <p className='ps-3'>Total Item</p>
                  <p className='fw-bold pe-4' style={{ fontSize: '20px' }}>2</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between p-1'>
                  <p className='ps-3'>Total Price</p>
                  <p className='fw-bold pe-4' style={{ fontSize: '19px' }}>299</p>
                </div>
                <hr />
                <div className='d-flex justify-content-between p-1 '>
                  <p className='p-2 fw-bold ps-3'>TOTAL</p>
                  <p className='fw-bold pe-4 fw-bold pt-1' style={{ fontSize: '22px' }}>299</p>
                </div>
                
              </div>
            </div>
          </Col>
        </Row>

<BottomDrawer/>    

      </div>
      
    </>
  )
}

export default Cart