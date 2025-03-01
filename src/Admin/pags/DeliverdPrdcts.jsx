import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import axios from 'axios';



function DeliverdPrdcts() {

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
            <div className='m-2'>
                <div className='p-2'>
                    <Row className='d-flex justify-content-center'>
                        {flattenedOrders.length > 0 ? (
                            flattenedOrders
                                .filter((booking) => booking.status === 'delivered') // Filter before mapping
                                .map((booking, index) => (
                                    <Col key={index} xs={12} sm={6} md={4} lg={3} className='m-2'>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Title>Card Title</Card.Title>
                                                <Card.Text>
                                                    Some quick example text to build on the card title and make up the
                                                    bulk of the card's content.
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                        ) : (
                            <div>No orders found</div>
                        )}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default DeliverdPrdcts