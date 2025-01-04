import React from 'react'
import Table from 'react-bootstrap/Table';
import chrdar from '../assets/chrdar2.png'

function Cart() {
  return (
    <>
      <div>
        <h3 className='text-center mt-4'>My Cart</h3>
        {/* <div>
      <div className='d-flex justify-content-between m-2 p-3 fw-bold' style={{fontSize:'16px'}}>
        <p>Product</p>
        <p>Quantity</p>
        <p>Days</p>
        <p>Price</p>
        <p>Total Price</p>
      </div>
    </div> */}

        <div className=''>
          <Table hover responsive className='' >
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Days</th>
                {/* <th>Price</th> */}
                <th>Total</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='d-flex'>
                  <div>
                    <img className='img-fluid' src={chrdar} alt="" style={{ height: '5rem', width:'4rem', backgroundColor: 'gray  ' }} />
                  </div>
                  <div className='ms-3'>
                    <span className='fw-bold'>Dupatta Set</span><br />
                    <span style={{marginTop:'-10px'}}>299</span><br />
                    <span>M,silk</span>
                  </div>
                </td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
               
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>

      </div>
    </>
  )
}

export default Cart