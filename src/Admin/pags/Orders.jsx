import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import CountdownTimer from '../component/CountDowm';

function Orders() {
    const [allOrders, setAllOrders] = useState([]);
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

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

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            const response = await axios.put(`http://localhost:3000/update-status/${orderId}`, {
                status: newStatus,
            });

            if (response.status === 200) {
                // Update the local state to reflect the new status
                const updatedOrders = allOrders.map((order) =>
                    order._id === orderId ? { ...order, status: newStatus } : order
                );
                setAllOrders(updatedOrders);
                alert('Order status updated successfully!');
            }
        } catch (error) {
            console.error('Error updating order status:', error);
            alert('Failed to update order status.');
        }
    };

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
                                            <div>
                                                <p className='text-secondary'>Order Date</p>
                                                <p>{new Date(booking.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className='d-flex flex-column'>
                                            <div>
                                                <p>Payment Method : <span>{booking?.paymentMethod}</span></p>
                                            </div>
                                            <p className='text-secondary'>Product Details</p>
                                            {booking.items.map((item, idx) => (
                                                <div key={idx} className='mb-3'>
                                                    {/* Display CountdownTimer only if status is 'delivered' and startingDate is today */}
                                                    {booking.status === 'delivered' && 
                                                        <div className='border p-3 m-2 bg-info text-light '>
                                                            <CountdownTimer endDate={item.endingDate} />
                                                        </div>
                                                    }

                                                    <p><strong>Product Name:</strong> {item.product?.name || "N/A"}</p>
                                                    <p><strong>Quantity:</strong> {item.quantity || "N/A"}</p>
                                                    <p><strong>Days:</strong> {item.days || "N/A"}</p>
                                                    <p><strong>Size:</strong> {item.size || "N/A"}</p>
                                                    <p><strong>Total:</strong> {item.total || "0"}/-</p>
                                                    <p><strong>Starting Date:</strong> {new Date(item.startingDate).toLocaleDateString() || "N/A"}</p>
                                                    <p><strong>Ending Date:</strong> {new Date(item.endingDate).toLocaleDateString() || "N/A"}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <hr />

                                        <div>
                                            <p className='text-secondary'>Status</p>
                                            <select
                                                value={booking.status}
                                                onChange={(e) => handleStatusChange(booking._id, e.target.value)}
                                                className='p-1 border rounded border-dark'
                                            >
                                                <option disabled value="">{booking.status}</option>
                                                <option value="pending">Pending</option>
                                                <option value="delivered">Delivered</option>
                                                <option value="returned">Returned</option>
                                            </select>
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