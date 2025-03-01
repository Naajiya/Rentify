import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import CountdownTimer from '../component/CountDowm';
import Modal from 'react-bootstrap/Modal';
import SERVER_URL from '../../../services/serverUrl';
import { Link } from 'react-router-dom';




function Orders() {
    const [allOrders, setAllOrders] = useState([]);
    console.log(allOrders)
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    const [selectedUser, setSelectedUSer] = useState({ userDetails: '', userAddress: '' })
    console.log(selectedUser)

    const [show, setShow] = useState(false);

    const handleClose = () => {
        setSelectedUSer({ userDetails: '', userAddress: '' })
        setShow(false)
    };

    const handleShow = (userDet, userAddres) => {
        setSelectedUSer({ userDetails: userDet, userAddress: userAddres })
        setShow(true)
    };


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


    const handleReturn = async (productId) => {

        console.log("Product ID:", productId);

        try {
            const response = await axios.put(`http://localhost:3000/add-stock/${productId}`)
            if (response.status == 200) {
                console.log(response.data)
            }

        } catch (err) {
            console.log(err)
        }

    };



    return (
        <>
            <Header />
            <div className='w-100'>
                <div className='text-center p-4 bg-dark w-100'>
                    <h4 className='text-light'>Orders</h4>
                </div>

                <Link to={'/admin/deliverds'}>
                    <div className='m-3 fw-bold bg-secondary p-2 text-center'>
                        <h5 className='text-light'>  Delivered Products</h5>
                    </div>
                </Link>

                <div className='w-100 text-center row pt-5'>
                    {flattenedOrders.length > 0 ? (
                        flattenedOrders.map((booking, index) => (
                            <div key={index} className='text-center d-flex align-items-center justify-content-center m-3'>
                                <Card className='w-50'>
                                    <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <div>
                                                <p className='text-secondary'>Customer</p>
                                                <div className='border pt-2 rounded-4 bg-dark text-light ps-2 pe-2'><p style={{ cursor: 'pointer' }} onClick={() => handleShow(booking.user, booking.address)}>{booking.user?.username || "N/A"}</p></div>
                                            </div>
                                            <div>
                                                <p className='text-secondary'>Order Date</p>
                                                <p>{new Date(booking.createdAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>

                                        <hr />

                                        <div className='d-flex flex-column '>
                                            <div>
                                                <p>Payment Method : <span>{booking?.paymentMethod}</span></p>
                                            </div>
                                            <p className='text-secondary'>Product Details</p>
                                            {booking.items.map((item, idx) => (
                                                <div key={idx} className='mb-3'>
                                                    {/* Display CountdownTimer only if status is 'delivered' and startingDate is today */}
                                                    {booking.status === 'delivered' &&
                                                        <div className='border p-3 m-2 bg-dark text-light '>
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
                                                onChange={(e) => {
                                                    const newStatus = e.target.value;
                                                    if (newStatus === "returned") {
                                                        handleReturn(booking.items[0].product?._id);
                                                    }
                                                    handleStatusChange(booking._id, newStatus);
                                                }}
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

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Customer Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='d-flex flex-column align-items-start justify-content-center'>
                            <p className='fw-bold'>
                                Customer Name :
                                {selectedUser?.userDetails?.username}
                            </p>
                            <p><span className='fw-bold'>Name in address :</span> {selectedUser?.userAddress?.[0]?.name}</p>
                            <p><span className='fw-bold'>Deliver address :</span>{selectedUser?.userAddress?.[0]?.addresses}</p>
                            <p><span className='fw-bold'>Deliver Phone :</span>{selectedUser?.userAddress?.[0]?.phone}</p>
                            <p><span className='fw-bold'>Pincode :</span>{selectedUser?.userAddress?.[0]?.pincode}</p>
                            <p><span className='fw-bold'>AadharNumber :</span>{selectedUser?.userAddress?.[0]?.aadharNumber}</p>

                            <div className='d-flex '>
                                <span className='fw-bold'>DigtalSign:</span>
                                <img src={`${SERVER_URL}/uploads/${selectedUser?.userAddress?.[0]?.digSign}`} style={{ height: '7rem', width: '7rem' }} alt="" />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>

            </div>
        </>
    );
}

export default Orders;