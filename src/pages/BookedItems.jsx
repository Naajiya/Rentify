import React from 'react'
import Header from '../components/Header'


function BookedItems() {
  return (
    <>
      <Header />

      <div className='pt-5'>
        <div className='pt-4' style={{backgroundColor:'rgb(235, 232, 232)'}}>
          <div className='p-5'>
            <div style={{ fontFamily: 'cursive' }} className=' fs-3 text-dark text-center'>Your Bookings</div>
          </div>
        </div>
      </div>

      <div className='p-5'>
        <div className='shadow mt-1 p-4 ' style={{backgroundColor:'rgb(235, 232, 232)'}}>
          <div className='d-flex justify-content-between'>
            <div>
              <h5>Dupatta set</h5>
              <hr />
              <p >299/day</p>
            </div>
            <div>
              <p className='fw-bold'>Start Date</p>
              <hr />
              <p>12-12-12</p>
            </div>
            <div>
              <p className='fw-bold'>no.of.days</p>
              <hr />
              <p>7</p>
            </div>
            <div>
              <p className='fw-bold'>Quantity</p>
              <hr />
              <p>2</p>
            </div>
            <div>
              <p className='fw-bold'>Total</p>
              <hr />
              <p>3999/-</p>
            </div>
            <div>
              <p className='fw-bold'>Status</p>
              <hr />
              <p className='text-success'>Shipped</p>
            </div>
          </div>
        </div>
        <div className='shadow mt-3 p-4 ' style={{backgroundColor:'rgb(235, 232, 232)'}}>
          <div className='d-flex justify-content-between'>
            <div>
              <h5>Dupatta set</h5>
              <hr />
              <p >299/day</p>
            </div>
            <div>
              <p className='fw-bold'>Start Date</p>
              <hr />
              <p>12-12-12</p>
            </div>
            <div>
              <p className='fw-bold'>no.of.days</p>
              <hr />
              <p>7</p>
            </div>
            <div>
              <p className='fw-bold'>Quantity</p>
              <hr />
              <p>2</p>
            </div>
            <div>
              <p className='fw-bold'>Total</p>
              <hr />
              <p>3999/-</p>
            </div>
            <div>
              <p className='fw-bold'>Status</p>
              <hr />
              <p className='text-success'>Shipped</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookedItems