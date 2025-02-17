import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Form, InputGroup, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../context/AuthContext';


function Header() {

  const { isAuthorizes, setIsAuthorizes } = useContext(AuthenticationContext)

  const handleLogout =()=>{
    sessionStorage.clear()
    setIsAuthorizes(false)
    navigate('/')
  }


  const [searchKey, setSearchKey] = useState('');
  console.log("Search Key:", searchKey);
  const navigate = useNavigate();

  // Function to handle search input change
  const handleSearchChange = (e) => {
    e.persist();
    setSearchKey(e.target.value);
    console.log("Search Input Changed:", e.target.value);
  };

  // Function to handle the "Enter" key press to navigate to search results
  const handleKeyPress = (e) => {
    e.persist();
    // e.preventDefault()
    const value = e.target.value.trim();
    console.log("Enter Pressed with Value:", value);
    if (e.key === 'Enter' && value !== '') {
      // Include the search query parameter in the URL
      e.preventDefault()
      navigate(`/SearchProducts/products?search=${value}`);
      e.preventDefault()
    }
  };

  return (
    <Navbar className="bg-body-tertiary w-100" style={{ overflowX: 'hidden', position: 'fixed', zIndex: 100 }}>
      <Container>
        <div>
          <h2 className="fw-bold logo" style={{ fontFamily: 'cursive' }}>RENTIFY</h2>
        </div>
        <Form>
          <Row>
            <Col xs="auto">
              <InputGroup className="w-100">
                <Form.Control
                  type="text"
                  placeholder="Search rentify"
                  className="rounded"
                  style={{
                    fontSize: "14px",
                    paddingLeft: "30px", // Adds space for the icon
                  }}
                  value={searchKey} // Controlled input
                  onChange={handleSearchChange} // Call handleSearchChange on input change
                  onKeyDown={handleKeyPress} // Capture Enter key press
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
            </Col>
            <Col xs="auto" className="me-5 d-flex mt-1">
              <div className='d-flex'>
                <Link to="/cart">
                  <div className="ms-3 text-dark mt-2">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                </Link>
                <div className=''>
                  <div onClick={handleLogout} className='border rounded p-1 ms-3 bg-info text-light'>Logout</div>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
    </Navbar>
  );
}

export default Header;
