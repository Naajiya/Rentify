import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Header() {
    return (
        <>

            <Navbar className="bg-body-tertiary justify-content-between">
                <div>
                    <p className='fs-3 ms-3' style={{ fontFamily: 'fantasy', fontWeight: '2px' }}>RENTIFY</p>
                </div>
                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className=" mr-sm-2 rounded w-100 h-75"
                            />
                        </Col>
                        <Col xs="auto">
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Navbar>
        </>
    )
}

export default Header