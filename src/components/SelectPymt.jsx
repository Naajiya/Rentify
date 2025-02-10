import axios from 'axios'
import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify'




function SelectPymt({cartDetails,selcAddress}) {

    
    console.log(cartDetails)

   const  handleOrder=()=>{
    if(selcAddress){
        console.log(selcAddress)
        console.log('clicked details order',cartDetails)
    }else{
        toast.error('address required')
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