import React, { useContext, useState } from 'react';
import { Form, InputGroup, Navbar, Container, Nav, Badge, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../context/AuthContext';
import { BadgeContext } from '../context/BadgeContext';
import { toast } from 'react-toastify';


function Header() {
  const { countBadge, setBadge, setOrderBadge, orderBadge } = useContext(BadgeContext);
  const { isAuthorizes, setIsAuthorizes } = useContext(AuthenticationContext);
  const [searchKey, setSearchKey] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    setBadge(0);
    setOrderBadge(false);
    setIsAuthorizes(false);
    navigate('/');
  };

  const handleProfile = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      toast('Please login');
    } else {
      navigate('/profile');
    }
  };

  const handleSearchChange = (e) => {
    setSearchKey(e.target.value);
  };

  const handleKeyPress = (e) => {
    const value = e.target.value.trim();
    if (e.key === 'Enter' && value !== '') {
      e.preventDefault();
      navigate(`/SearchProducts/products?search=${value}`);
    }
  };

  const handleBadge = () => {
    setBadge(0);
    const token = sessionStorage.getItem('token');
    if (!token) {
      toast('Please login');
    } else {
      navigate('/cart');
    }
  };

  const handleOrderBadge = () => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      toast('Please login');
    } else {
      setOrderBadge(false);
      navigate('/bookedItems');
    }
  };

  const handleLogin = () => {
    navigate('/login');
    window.scroll.to(0, 0);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        {/* Brand/Logo */}
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-2" style={{ fontFamily: 'cursive' }}>
        <h2 className="fw-bold logo ms-5 fs-2" style={{ fontFamily: 'cursive' }}>RENTIFY</h2>
        </Navbar.Brand>

        {/* Toggler Button for Small Screens */}
        <Navbar.Toggle aria-controls="navbarSupportedContent" />

        {/* Collapsible Section */}
        <Navbar.Collapse id="navbarSupportedContent">
          {/* Search Bar */}
          <Form className="d-flex mx-auto my-2 my-lg-0" style={{ maxWidth: '500px', width: '100%' }}>
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

          {/* Icons and Login/Logout */}
          <Nav className="ms-auto d-flex align-items-center">
            {/* Cart Icon */}
            <Nav.Link onClick={handleBadge} className="p-2">
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
            </Nav.Link>

            {/* Order Badge Icon */}
            <Nav.Link onClick={handleOrderBadge} className="p-2">
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
            </Nav.Link>

            {/* Profile Icon */}
            <Nav.Link onClick={handleProfile} className="p-2">
              <i className="fa-solid fa-user"></i>
            </Nav.Link>

            {/* Login/Logout Button */}
            {isAuthorizes ? (
              <Nav.Link onClick={handleLogout} className="p-2">
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link onClick={handleLogin} className="p-2">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

