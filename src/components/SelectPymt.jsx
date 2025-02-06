import axios from 'axios'
import React, { useContext } from 'react'


import { CartContexts } from '../context/CartContext';

function SelectPymt() {

    const { cartDetails } = useContext(CartContexts)
    console.log(cartDetails)

    const handleOrder = async () => {

        const orderPayload = {
            items: cartDetails.map(item => ({
                product: item.productId._id,
                quantity: item.quantity,
                days: item.days,
                size: item.size,
                total: item.total
            }))
        }

        try {


            const result = await axios.post(
                `http://localhost:3000/create-order`,orderPayload,

                {
                    headers: { Authorization: sessionStorage.getItem("token") },
                }
            );
            console.log(result)
            if (result.status == 201) {
                alert('Order placed successfully!');

            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className='m-2'>
                <div className='text-center'>
                    <p className='p-2'>PAYMENT METHOD</p>
                    <div className='d-flex d-flex justify-content-center align-items-center'>
                        <div className='border rounded shadow pt-2 pe-2 ps-2'>
                            <div>
                                <p className='' style={{ fontSize: '15px' }}>cash on delivery</p>
                            </div>
                            <div>
                                {/* <p style={{fontSize:''}}></p> */}
                            </div>

                        </div>
                    </div>
                    <div className='m-3'>
                        <button onClick={handleOrder} className='btn btn-success'>place order</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectPymt