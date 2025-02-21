import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Header from '../component/Header'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';




function DashBoard() {

    const [exp, setExp] = useState({ expenseCost: "", description: "" })
    console.log(exp)
    const [revenue,setRevenue]=useState({})
    console.log('setrev',revenue)
    const [incomeNot,setIncomeNot]=useState([])
    console.log('income',incomeNot)


    const handleExpense=async()=>{
        const {expenseCost,description}=exp
        if(expenseCost && description ){

        const reqBody={
            expenseCost,
            description
        }
            try{
                const result = await axios.post('http://localhost:3000/add-expense', reqBody)
                if(result.status==200){
                    toast.success('expense details added')
                    getRevenuedetls()
                    getIncomeORnot()

                }

            }catch(err){
                console.log(err)
                toast.error('Failed to add expense');
            }

        }else{
            toast.error('enter all fields')
        }
    }

    useEffect(()=>{
        getRevenuedetls()
        getIncomeORnot()
    },[])


    const getRevenuedetls=async()=>{
        try{
            const response = await axios.get('http://localhost:3000/get-revenue')
            if(response.status==200){
                // console.log(response.data)
                setRevenue(response.data)
            }
        }catch(err){
            console.log(err)
        }
    }

    const getIncomeORnot=async()=>{
        try{
            const response = await axios.get('http://localhost:3000/get-income')
            if(response.status==200){
                // console.log(response.data)
                setIncomeNot(response.data)
            }
        }catch(err){
            console.log(err)
        }
    }


    return (
        <>
            {/* style={{ backgroundColor: 'rgb(243, 243, 243)' }} */}
            <Header />
            <div className='p-4'>
                <div className='mt-1'>
                    <div>
                        <Row>
                            <Col className='shadow m-3' style={{ backgroundColor: 'rgb(243, 243, 243)' }} >
                                <div className='w-100 m-1 p-1 '>
                                    <div className='w-100 p-1 ' >
                                        <p className=' rounded p-2 fs-3 bg-light fw-bold' style={{fontFamily:'cursive'}}>
                                            Overview of Products
                                        </p>
                                    </div>
                                    <Row className='w-100 p-2 mt-1 d-flex  '>
                                        <Col lg={8} className=''>
                                        <div className='d-flex text-center w-100 justify-content-center'>
                                            <div className='d-flex justify-content-center align-items-center' style={{height:'12rem', width:'12rem',borderRadius:'50%', backgroundColor:'gray'}}>
                                                <div className='d-flex flex-column justify-content-center align-items-center' style={{height:'10rem', width:'10rem',borderRadius:'50%',border:'5px', backgroundColor:'white'}} >
                                                    <span className='fs-3 fw-bold'>{incomeNot?.incomeOrLoss
                                                    }</span>
                                                  
                                                    <span>{incomeNot?.msg}</span>
                                                </div>
                                            </div>
                                        </div>
                                            <div>
                                                <p className='fw-bold fs-5  '>Add Expense</p>
                                            </div>
                                            <div className='border p-2'>
                                                
                                                <Form>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label>Cost</Form.Label>
                                                        <Form.Control onChange={(e)=>setExp({...exp,expenseCost:e.target.value})} type="number" placeholder="cost of expense" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label>Description</Form.Label>
                                                        <Form.Control onChange={(e)=>setExp({...exp,description:e.target.value})} as="textarea" placeholder="add description" rows={3} />
                                                    </Form.Group>
                                                    <div className='d-flex justify-content-end'>
                                                        <button onClick={handleExpense} type='button' className='btn btn-secondary w-25'>Add Expense</button>
                                                    </div>
                                                </Form>
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <Card style={{ width: '18rem' }} className='mb-2 '>
                                                <Card.Body>
                                                    <Card.Title className='fs-1'> ₹{revenue?.revenueData?.grandTotal}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">Rent Earnings</Card.Subtitle>

                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: '18rem' }} className='mb-2'>
                                                <Card.Body>
                                                    <Card.Title className='fs-4'>₹{revenue?.revenueData?.totalExpense} </Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">Total Expense</Card.Subtitle>

                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: '18rem' }} className='mb-2'>
                                                <Card.Body>
                                                    <Card.Title className='fs-4'>{revenue?.totalProducts}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">Total Products</Card.Subtitle>

                                                </Card.Body>
                                            </Card>
                                            <Card style={{ width: '18rem' }}>
                                                <Card.Body>
                                                    <Card.Title className='fs-4'>{revenue?.totalCustomer}</Card.Title>
                                                    <Card.Subtitle className="mb-2 text-muted">Total Customers</Card.Subtitle>

                                                </Card.Body>
                                            </Card>
                                        </Col>
                                       
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard