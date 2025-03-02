import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Form, InputGroup, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../context/AuthContext';
import { Button, Badge } from "react-bootstrap";
import { BadgeContext } from '../context/BadgeContext';
import { toast, ToastContainer } from 'react-toastify';




function Header() {
  const { countBadge, setBadge, setOrderBadge, incrementBadge, orderBadge, toggleOrderBadge } = useContext(BadgeContext)

  const { isAuthorizes, setIsAuthorizes } = useContext(AuthenticationContext);



  const [searchKey, setSearchKey] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    setBadge(0)
    setOrderBadge(false)
    setIsAuthorizes(false);
    navigate('/');
  };

  const handleSearchChange = (e) => {
    e.persist();
    setSearchKey(e.target.value);
  };

  const handleKeyPress = (e) => {
    e.persist();
    const value = e.target.value.trim();
    if (e.key === 'Enter' && value !== '') {
      e.preventDefault();
      navigate(`/SearchProducts/products?search=${value}`);
    }
  };



  const handleBadge = () => {
    console.log('clicked badge')
    setBadge(0)

    const token = sessionStorage.getItem('token')
    if (!token) {
      toast('please login')
    } else {
      navigate('/cart')
    }
  }


  const handleOrderBadge = () => {
    console.log('d')

    const token = sessionStorage.getItem('token')
    if (!token) {
      toast('please login')
    } else {
      // toggleOrderBadge()
      setOrderBadge(false)
      navigate('/bookedItems')
    }


  }


  const handleLogin=()=>{
    navigate('/login')
    window.scroll.to(0,0)
  }


  return (
    <Navbar className="bg-body-tertiary w-100" style={{ overflowX: 'hidden', position: 'fixed', zIndex: 100 }}>
      <Container fluid>
        <Row className="w-100 align-items-center d-flex align-items-center justify-content-center">
          {/* Logo */}
          <Col xs={6} md={3} className="ms-1d-flex align-items-center">
            <Link to={'/'} className="text-decoration-none">
              <h2 className="fw-bold logo ms-5 fs-2" style={{ fontFamily: 'cursive' }}>RENTIFY</h2>
            </Link>
          </Col>

          {/* Search Bar */}
          <Col xs={12} md={6} className="mt-2 mt-md-0">
            <Form>
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  className="rounded"
                  style={{
                    fontSize: "14px",
                    paddingLeft: "30px",
                  }}
                  value={searchKey}
                  onChange={handleSearchChange}
                  onKeyDown={handleKeyPress}
                />
                <i
                  className="fa-solid fa-magnifying-glass fa-1x"
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "55%",
                    transform: "translateY(-50%)",
                    color: "#ccc",
                  }}
                ></i>
              </InputGroup>
            </Form>
          </Col>

          {/* Cart and Logout */}
          <Col xs={6} md={3} className="d-flex p-2 justify-content-end align-items-center">
            <div className="d-flex ">
              {/* Cart Icon */}

              <div onClick={handleBadge} className=' p-1  rounded-2' variant="primary">
                <i className="fa-solid fa-cart-shopping"></i>
                <Badge
                  bg="dark"
                  text="light"
                  style={{
                    fontSize: "0.6rem", // Adjust font size
                    padding: "2px 5px", // Adjust padding
                  }}
                >
                  {countBadge > 0 &&
                    countBadge
                  }
                </Badge>
              </div>


              <div onClick={handleOrderBadge} className=' p-1 ms-2 rounded-2 text-decoration-none' >
                <i class="fa-solid fa-box-archive"></i>
                {
                  orderBadge &&
                  <Badge
                    bg="danger"
                    text="danger"
                    style={{
                      fontSize: "0.6rem", // Adjust font size
                      padding: "1px 2px", // Adjust padding
                      marginLeft: '-5px',
                      paddingTop: '1px',
                      backgroundColor: 'red',
                      color: 'red'
                    }}

                  >0
                  </Badge>
                }

              </div>

              <div className=' p-1 ms-2 rounded-2 text-decoration-none'>
              <i class="fa-solid fa-user"></i>
              </div>



              {/* Logout Button */}

              {
                isAuthorizes ?
                  <div onClick={handleLogout} className="border rounded p-1 ms-3 text-dark cursor-pointer">
                    Logout
                  </div>
                  :
                  <div onClick={handleLogin} className="border rounded p-1 ms-3 text-dark cursor-pointer">
                    Login
                  </div>
              }



            </div>

          </Col>
        </Row>
      </Container>



    </Navbar>
  );
}

export default Header;