import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Header() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            profile
        </Tooltip>
    );

    const renderTooltipa = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            login
        </Tooltip>
    );

    const renderTooltiwish = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            wishllist
        </Tooltip>
    );


    return (
        <>



            <Navbar className="bg-body-tertiary"  style={{overflowX:'hidden',position:'sticky'}}>
                <Container>
                    <div >
                        <h2 className=' fw-bold  logo'>RENTIFY</h2>

                    </div>
                    <Form inline>
                        <Row>
                            <Col xs="auto">
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search rentify"
                                        className="rounded"
                                        style={{
                                            fontSize: "14px",
                                            paddingLeft: "30px" // Adds space for the icon
                                        }}
                                    />
                                    <i
                                        className="fa-solid fa-magnifying-glass fa-1x "
                                        style={{
                                            position: "absolute",
                                            left: "10px",
                                            top: "55%",
                                            transform: "translateY(-50%)",
                                            color: "#ccc"
                                        }}
                                    ></i>
                                   
                                </InputGroup>


                            </Col>
                            <Col xs="auto" className='me-5 d-flex mt-1 '>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltipa}
                                >
                                    <div className='me-2'> <i class="fa-solid fa-bag-shopping "></i></div>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <div className='ms-2'> <i class="fa-solid fa-user"></i></div>
                                </OverlayTrigger>
                                
                                <OverlayTrigger
                                    placement="right"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltiwish}
                                >
                                    <Link to={'/wishlist'}><div className='ms-3 text-dark'> <i class="fa-solid fa-heart "></i></div></Link>
                                </OverlayTrigger>
                            </Col>

                        </Row>
                    </Form>
                </Container>
            </Navbar>
        </>
    )
}

export default Header