import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';

function BookedItems() {
  const [userBookings, setUserBookings] = useState([]);
  console.log(userBookings)
  useEffect(() => {
    getAllBookings();
  }, []);

  const getAllBookings = async () => {
    try {
      const result = await axios.get("http://localhost:3000/get-user-order", {
        headers: { Authorization: sessionStorage.getItem('token') },
      });

      if (result.status === 200) {
        setUserBookings(result.data.orders); // API response is an array of orders

      }
    } catch (err) {
      console.error("Error fetching bookings:", err);
    }
  };

  const [daysList, setDaysList] = useState([]);
  console.log(daysList)

  useEffect(() => {
    // Extract days from userBookings and store them in state
    if (userBookings.length > 0) {
      const extractedDays = userBookings.flatMap(booking => 
        booking.items.map(item => item.days) // Extract 'days' from each item
      );
      setDaysList(extractedDays); // Update state
    }
  }, [userBookings]);

  return (
    <>
      <Header />
      <div className="pt-5">
        <div className="pt-2" style={{ backgroundColor: "rgb(235, 232, 232)" }}>
          <div className="p-4">
            <div
              style={{ fontFamily: "cursive" }}
              className="fs-3 text-dark text-center"
            >
              Your Bookings
            </div>
          </div>
        </div>
      </div>

     
      {userBookings.length > 0 ? (
  userBookings.map((booking, index) => (
    <div key={index}>
      {booking.items.map((item, idx) => (
        
        <div key={idx} className="">
          <div className="d-flex ">
            <div className="d-flex m-4 w-100">
              <Row className="d-flex w-100 justify-content-center">
                {/* First Column */}
                <Col lg={8}>
                  <div className="p-3 border rounded">
                    <div className="d-flex justify-content-between">
                      <div>
                        <p className="mt-2 fw-bold fs-5">{item.product.name}</p>
                        <p>{booking.address[0]?.date ? new Date(booking.address[0].date).toLocaleDateString() : "No Date Available"}</p>
                      </div>
                      <div className="btn fw-bold  mt-2 border h-25 p-2 ps-3 text-light pe-3 bg-info ">{booking.status}</div>
                    </div>
                    <div className="d-flex justify-content-between">
                      <div className="d-flex">
                        <p className="text-secondary">Quantity: </p>{item.quantity}
                      </div>
                      <div className="d-flex">
                        <p className="text-secondary">Price: </p>₹ {item.total}
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Second Column */}
                
              </Row>
            </div>
          </div>
        </div>
      ))}
    </div>
  ))
) : 
(
  <div className="text-center p-5">
    <h5>No bookings found</h5>
  </div>
)}
  





    </>
  );
}

export default BookedItems;