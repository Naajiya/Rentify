import React from 'react';
import { Col } from 'react-bootstrap';

function SelectAddress({ address, setSelcAddress }) {
    console.log('get props ', address);

    const handleAdres = (id) => {
        console.log('inside handle address');
        setSelcAddress(id); // Update selcAddress only when the button is clicked
    };

    return (
        <>
            <div>
                {address.map((add) => (
                    <div key={add._id} className='m-3 row border rounded'>
                        <Col lg={10} className='p-2'>
                            <p className='fw-bold'>{add.name}</p>
                            <span>{add.addresses}</span><br />
                            <span>{add.phone}</span>
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