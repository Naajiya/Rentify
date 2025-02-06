import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Orders() {
    const [allOrders, setAllOrders] = useState([]);

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

    return (
        <>
            <Header />
            <div className='w-100'>
                <div className='text-center p-4 bg-dark w-100' >
                    <h4 className='text-light'>Orders</h4>
                </div>

                <div className='w-100 text-center row pt-5'>
                    {allOrders.length > 0 ? (
                        allOrders.map((booking, index) => (
                            <div key={index} className='text-center d-flex align-items-center justify-content-center m-3'>
                                <Card className='w-50'>
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <p className='text-secondary'>Username</p>
                                                <p>{booking.user?.username || "N/A"}</p>
                                            </div>
                                            <div>
                                                <p className='text-secondary'>Order Date</p>
                                                <p>{new Date(booking.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>

                                        <hr />

                                        <div>
                                            <p className='text-secondary'>Product Details</p>
                                            {booking.items.map((item, idx) => (
                                                <div key={idx} className='mb-3 '>
                                                    <p><strong>Product Name:</strong> {item.product?.name || "N/A"}</p>
                                                    <p><strong>Quantity:</strong> {item.quantity || "N/A"}</p>
                                                    <p><strong>Days:</strong> {item.days || "N/A"}</p>
                                                    <p><strong>Size:</strong> {item.size || "N/A"}</p>
                                                    <p><strong>Total:</strong> {item.total || "0"}/-</p>
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