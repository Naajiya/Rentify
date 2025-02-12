import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import CountdownTimer from '../component/CountDowm';

function Orders() {
    const [allOrders, setAllOrders] = useState([]);
    console.log(allOrders)
    const today= new Date().toISOString()
    console.log(today)

    useEffect(() => {
        getAllOrders();
    }, []);

    const getAllOrders = async () => {
        try {
            const result = await axios.get("http://localhost:3000/get-all-orders");
            if (result.status === 200) {
                setAllOrders(result.data.orders);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // Flatten the orders into individual items
    const flattenedOrders = allOrders.flatMap((order) =>
        order.items.map((item) => ({
            ...order, // Copy all properties from the parent order
            items: [item], // Replace the items array with just this item
        }))
    );

     const startDate = '2025-02-10T00:00:00'; // Replace with your start date
  const endDate = '2025-02-15T23:59:59'

    return (
        <>

            <Header />
            
            <div className='w-100'>
                <div className='text-center p-4 bg-dark w-100'>
                    <h4 className='text-light'>Orders</h4>
                </div>

                <div className='w-100 text-center row pt-5'>
                    {flattenedOrders.length > 0 ? (
                        flattenedOrders.map((booking, index) => (
                            <div key={index} className='text-center d-flex align-items-center justify-content-center m-3'>
                                <Card className='w-50'>
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <p className='text-secondary'>Username</p>
                                                <p>{booking.user?.username || "N/A"}</p>
                                            </div>
                                            
                                            {/* <div className='border  p-2 rounded w-50'>
                                           
                                            </div> */}
                                            <div>
                                                <p className='text-secondary'>Order Date</p>
                                                <p>{new Date(booking.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className='d-flex flex-column'>
                                            <p className='text-secondary'>Product Details</p>
                                            {booking.items.map((item, idx) => (
                                                <div key={idx} className='mb-3'>
                                                    <div>
                                                        {
                                                            today == item.startingDate &&
                                                            <CountdownTimer  endDate={item.endingDate} />
                                                        }
                                                    </div>
                                                    <p><strong>Product Name:</strong> {item.product?.name || "N/A"}</p>
                                                    <p><strong>Quantity:</strong> {item.quantity || "N/A"}</p>
                                                    <p><strong>Days:</strong> {item.days || "N/A"}</p>
                                                    <p><strong>Size:</strong> {item.size || "N/A"}</p>
                                                    <p><strong>Total:</strong> {item.total || "0"}/-</p>
                                                    <p><strong>Total:</strong> {new Date(item.startingDate).toLocaleDateString() || "0"}</p>
                                                    <p><strong>endingDate:</strong> {new Date(item.endingDate).toLocaleDateString() || "0"}/-</p>
                                                </div>
                                            ))}
                                        </div>

                                        <hr />

                                        <div>
                                            <p className='text-secondary'>Status</p>
                                            <p className={booking.status === "shipped" ? "text-success" : "text-warning"}>
                                                {booking.status || "Pending"}
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))
                    ) : (
                        <div>No orders found</div>
                    )}
                </div>

                
            </div>
        </>
    );
}

export default Orders;