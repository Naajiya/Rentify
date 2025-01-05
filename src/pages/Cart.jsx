import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import chrdar from '../assets/chrdar2.png'
import { Button } from 'react-bootstrap';



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


  return (
    <>
      <div>
        <h2 className='text-center p-5 ' style={{backgroundColor:'rgb(232, 233, 232)',fontFamily:'cursive',backgroundAttachment:'fixed'}}>
          Your Cart
          </h2>
        

        <div className='m-2'>
          <Table  responsive  className={`table ${isSmallScreen ? 'table-bordered' : ''}`}  >
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
              <tr>
                <td className='d-flex h-100 align-items-center' >
                  <div>
                    <img className='img-fluid' src={chrdar} alt="Placeholder" style={{ width: '10vw', maxWidth: '50px', height:'10vw',maxHeight:'80px', backgroundColor: 'gray  ' }} />
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
                      <Button  variant="outline-light" className='text-dark w-75 fs-5'>+</Button>
                      <input type="text" className='border border-light text-center bg-light rounded m-1' style={{ width: '40px' }} readOnly value={0} />
                      <Button  variant="outline-light " className='text-dark w-75 fs-5'>-</Button>
                    </div>
                  </div>
                </td>
                <td>
                <div className='w-50 d-flex  justify-content-between'>
                      <Button  variant="outline-light" className='text-dark w-75 fs-5'>+</Button>
                      <input type="text" className='border border-light text-center bg-light rounded m-1' style={{ width: '40px' }} readOnly value={1} />
                      <Button  variant="outline-light " className='text-dark w-75 fs-5'>-</Button>
                    </div>
                </td>
                <td>RS. 299</td>

                <td><i class="fa-solid fa-circle-xmark"></i></td>

              </tr>

             
            </tbody>
          </Table>
        </div>

      </div>
    </>
  )
}

export default Cart