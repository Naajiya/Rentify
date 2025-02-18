import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { BadgeContext } from '../context/BadgeContext';




function SelectPymt({ cartDetails, selcAddress, totalAmount }) {

    const {countBadge, setBadge, incrementBadge, orderBadge, toggleOrderBadge}=useContext(BadgeContext)

    const [paymentMethod, setPaymentMethod] = useState('');

    console.log('Payment Method:', paymentMethod);
    console.log(cartDetails);

    const handleOrder = async () => {
        if (!paymentMethod) {
            toast.error('Please select a payment mode');
            return;
        }
        if (!selcAddress) {
            toast.error('Please select an address');
            return;
        }
        if (cartDetails.length === 0) {
            toast.error('No items in the cart');
            return;
        }

        try {
            const token = sessionStorage.getItem('token');
            if (!token) {
                toast.error('User is not authenticated');
                return;
            }

            const response = await axios.post(
                'http://localhost:3000/create-order',
                {
                    selectedAddressId: selcAddress,
                    items: cartDetails,
                    paymentMethod
                },
                {
                    headers: {
                        Authorization: token
                    }
                }
            );

            if (response.status === 200) {
                toast.success('Order created successfully');
                console.log(response.data);
                toggleOrderBadge()
                // navigate('/orders'); // Redirect to orders page
            }
        } catch (err) {
            console.error('Error creating order:', err.response?.data || err.message);
        }
    };

    const [onlinePy,setOnlinePy]=useState(false)
    console.log('onlinePy',onlinePy)

    const paymentHandler = async (e) => {
        e.preventDefault(); // Prevent default behavior
    
        try {
            const reqBody = {
                amount: totalAmount * 100, // Convert to paise
                currency: "INR",
                receipt: 'qwsaql'
            };
    
            const response = await axios.post('http://localhost:3000/order', reqBody, {
                headers: { "Content-Type": "application/json" }
            });
    
            const order = response.data;
            console.log('Order created:', order);
    
            var options = {
                "key": "rzp_test_g4AKnxr16tAjx5",
                "amount": totalAmount * 100, // Amount in paise
                "currency": "INR",
                "name": "NajiyaBinthMajeed",
                "description": "Test Transaction",
                "image": "https://example.com/your_logo",
                "order_id": order?.id || '', 
                "handler":async function (response) {
                   const reqBody={
                    ...response,
                   }
                   
                  const validateres =await axios.post('http://localhost:3000/order/validate',reqBody,{
                    headers:{ "Content-Type": "application/json" }
                   })
                   console.log(validateres)

                   if(validateres.status==200){
                    setOnlinePy(true)
                    setPaymentMethod('online payment')
                   }
                },
                "prefill": {
                    "name": "web dev",
                    "email": "webdev.kumar@example.com",
                    "contact": "9000090000"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
    
            var rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response) {
                alert(response.error.description);
            });
            rzp1.open();
        } catch (err) {
            console.error('Error creating order:', err.response?.data || err.message);
            if (err.response) {
                // Server responded with a status code out of the range of 2xx
                console.error('Data:', err.response.data);
                console.error('Status:', err.response.status);
                console.error('Headers:', err.response.headers);
            } else if (err.request) {
                // Request was made but no response was received
                console.error('Request:', err.request);
            } else {
                // Something happened in setting up the request that triggered an error
                console.error('Message:', err.message);
            }
        }
    };
    

    return (
        <>
        
            <div className='m-2'>
                <div className='text-center'>
                    <p className='p-2'>PAYMENT METHOD</p>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className='border p-4 d-flex m-2 rounded pt-2 pe-2 ps-2 justify-content-between w-25'>
                            <button onClick={() => setPaymentMethod('cash on delivery')} className='btn btn-light' style={{ fontSize: '15px' }}>
                                Cash on Delivery
                            </button>
                            <button onClick={async (e) => { 
                                 
                                paymentHandler(e); 
                            }} className='btn btn-light' style={{ fontSize: '15px' }}>
                                Pay Now
                            </button>
                        </div>
                    </div>
                    <div className='m-3'>
                        <button onClick={handleOrder} className='btn btn-success'>Place Order</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelectPymt;
