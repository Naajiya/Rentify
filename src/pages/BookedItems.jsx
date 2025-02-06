import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

function BookedItems() {
  const [userBookings, setUserBookings] = useState([]);

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
          <div key={index} className="p-5">
            {booking.items.map((item, idx) => (
              <div key={idx} className="shadow mt-1 p-4" style={{ backgroundColor: "rgb(235, 232, 232)" }}>
                <div className="d-flex justify-content-between">
                  <div>
                    <h5>{item.product?.name || "Unknown Product"}</h5>
                   
                    <p>{item.product?.price || "0"}/day</p>
                  </div>
                  <div>
                    <p className="fw-bold">Start Date</p>
                   
                    <p>{new Date(booking.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <p className="fw-bold">No. of Days</p>
                   
                    <p>{item.days || "N/A"}</p>
                  </div>
                  <div>
                    <p className="fw-bold">Quantity</p>
                 
                    <p>{item.quantity || "N/A"}</p>
                  </div>
                  <div>
                    <p className="fw-bold">Total</p>
                    
                    <p>{item.total || "0"}/-</p>
                  </div>
                  <div>
                    <p className="fw-bold">Status</p>
                   
                    <p className={booking.status === "shipped" ? "text-success" : "text-warning"}>
                      {booking.status || "Pending"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="text-center p-5">
          <h5>No bookings found</h5>
        </div>
      )}
    </>
  );
}

export default BookedItems;