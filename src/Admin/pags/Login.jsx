import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { adminLogin } from '../../../services/allApi';



function Login() {

    const navigate = useNavigate()

    const [adminlog, setAdminLog] = useState({ email: "", password: "" });
    console.log(adminlog)

    const handleAdminLog = async (e) => {
        e.preventDefault()
        if (adminlog.email && adminlog.password) {
            try {
                const result = await adminLogin(adminlog)
                console.log(result.data)
                if (result.status == 200) {
                    sessionStorage.setItem("admin", JSON.stringify(result.data.admin))
                    sessionStorage.setItem("token", result.data.token)

                    console.log("Admin:", sessionStorage.getItem("admin"));
                    console.log("Token:", sessionStorage.getItem("token"));

                    toast.success("successfully logined")
                    navigate('/admin/dashBoard');
                    setAdminLog({ email: "", password: "" })
                } else {
                    if (result.status == 400) {
                        toast.warning(result.response.data)
                        setAdminLog({ email: "", password: "" })

                    }
                }




            } catch (err) {
                console.log(err)
            }
        } else {
            toast.warning("enter the fields completly..")
        }
    }

    return (
        <>
            <div className='pt-5 bg-dark'>
                <div className='mt-3 bg-dark'>
                    <div className='bg-dark p-4'>
                        <Row className='p-3 d-flex text-center align-items-center justify-content-center'>
                            <Col className='col p-5 border' lg={6}>
                                <p className='text-light fs-1  p-2'>
                                    Login
                                </p>
                                <div className='d-flex flex-column align-items-center justify-content-center w-100 '>

                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3 bg-dark text-light "
                                    >
                                        <Form.Control type="email" onChange={(e) => { setAdminLog({ ...adminlog, email: e.target.value }) }} className='bg-dark border-light text-light w-100' placeholder="name@example.com" />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingPassword" className="mb-3 bg-dark text-light " label="Password">
                                        <Form.Control type="password" onChange={(e) => { setAdminLog({ ...adminlog, password: e.target.value }) }} className='bg-dark border-light text-light w-100' placeholder="passwoed" />
                                    </FloatingLabel>
                                    <Button onClick={(e) => handleAdminLog(e)} variant="outline-secondary">login</Button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    theme='colored'
                />

            </div>
        </>
    )
}

export default Login