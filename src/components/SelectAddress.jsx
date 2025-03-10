import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Input from '@mui/joy/Input';
import Stack from '@mui/joy/Stack';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';




function SelectAddress({ address, setSelcAddress }) {
    // console.log('get props ', address);

    const handleAdres = (id) => {
        console.log('inside handle address');
        setSelcAddress(id); // Update selcAddress only when the button is clicked
    };

    const [datess, setDatess] = useState("")

    const [dates, setDates] = useState({ day: null, month: null, year: null });

    useEffect(() => {
        today()
    })

    const today = () => {
        const date = new Date();
        // console.log(date);
        const m = date.getMonth();
        let d = date.getDate();
        const y = date.getFullYear();
        // console.log(d);

        const newDate = new Date(date.setDate(d + 5));
        const newDay = newDate.getDate();
        const newMonth = newDate.getMonth();
        const newYear = newDate.getFullYear();

        setDates({ day: newDay, month: newMonth, year: newYear });
    };


    const updateDate = async (adId, datess) => {
        console.log("dates", datess)
        console.log("adId", adId)
        if (!datess) {
            toast.error('eror')
        }
        try {

            const response = await axios.put(`http://localhost:3000/change-date/${adId}`,
                { date: datess },
                { headers: { Authorization: sessionStorage.getItem('token') } }
            )

            if (response.status == 200) {
                console.log(response.data)
                setDatess("")
            }

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <div>
                {address.map((add) => (
                    <div key={add._id} className='m-3 row border rounded p-3'>
                        <Col lg={10} className='p-2'>
                            <div>
                                <p className='fw-bold'>{add.name}</p>
                                <span>Address : {add.addresses}</span><br />
                                <span>Phone : {add.phone}</span> <br />
                                <span>Date : {new Date(add.date).toISOString().split('T')[0] || "N/A"}</span>
                            </div>
                            <Row className="">
                                <Col lg={8} className="border text-center rounded mt-2 p-3">
                                    <Row className="align-items-center">
                                        <Col lg={4} sm={12}>
                                            <p className="mt-3">Change Date :</p>
                                        </Col>
                                        <Col lg={4} sm={12} className="d-flex justify-content-center">
                                            <Stack spacing={1.5} sx={{ minWidth: 259 }}>
                                                <Input
                                                    type="date"
                                                    className="ms-1 m-2 w-100 text-secondary"
                                                    onChange={(e) => setDatess(e.target.value)}
                                                    variant="soft"
                                                    slotProps={{
                                                        input: {
                                                            min: `${dates.year}-${String(dates.month + 1).padStart(2, '0')}-${String(dates.day).padStart(2, '0')}`,
                                                        },
                                                    }}
                                                />
                                            </Stack>
                                        </Col>
                                        <Col lg={3} sm={12} className="d-flex justify-content-center">
                                            <button onClick={() => updateDate(add._id, datess)} className="btn btn-light fw-bold">
                                                Change
                                            </button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>

                        </Col>
                        <Col className='d-flex justify-content-center align-items-center'>
                            {/* Pass handleAdres as a callback */}
                            <button
                                onClick={() => handleAdres(add._id)} // Use an arrow function
                                className='btn btn-secondary'
                            >
                                Deliver to this Address
                            </button>
                        </Col>
                    </div>
                ))}
            </div>
        </>
    );
}

export default SelectAddress;