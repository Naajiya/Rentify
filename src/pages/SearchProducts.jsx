import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import SERVER_URL from '../../services/serverUrl'
import { toast, ToastContainer } from 'react-toastify'
import Header from '../components/Header';




function SearchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const location = useLocation(); // To access the query parameters from the URL



  // Function to fetch products based on search query
  const getSearchProduct = async (searchKey) => {
    if (searchKey.trim() === '') {
      setProducts([]); // Clear results when searchKey is empty
      return;
    }

    setLoading(true);
    try {
      const result = await axios.get('http://localhost:3000/get-search-products', {
        params: { search: searchKey }, // Passing search key in query params
      });
      setProducts(result.data); // Store the products returned from the backend
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Extract the search query from the URL and update local state
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const searchKeyFromURL = query.get('search');
    if (searchKeyFromURL && searchKeyFromURL !== searchKey) {
      setSearchKey(searchKeyFromURL); // Update the local state
      getSearchProduct(searchKeyFromURL); // Fetch products based on searchKey
    }
  }, [location.search]); // Trigger whenever location.search changes

  return (
    <>
    <Header/>
    <div className='pt-5'>
      <div className='mt-5'>
        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Row className='d-flex justify-content-center'>
            {products.length > 0 ? (
              products.map((product) => (
                <Col key={product._id} lg={3} md={6} sm={6} className=''>
                  <Link to={`/${product._id}/viewdetails`} className='text-decoration-none'>
                    <Card style={{ width: '13rem', height: '20rem' }} className='mb-2 border-none'>
                      <div className='img-wrapper img-fluid w-100 d-flex text-center justify-content-center align-items-center'>
                        <Card.Img className='card-img img-fluid' variant="top" src={`${SERVER_URL}/uploads/${product.imgOne}`} />
                      </div>
                      <Card.Body>
                        <Card.Title>
                          <div className='d-flex justify-content-center'>
                            <p className='text-center' style={{ fontSize: '15px', fontFamily: 'cursive' }}>{product.name}</p>
                          </div>
                        </Card.Title>
                        <Card.Text className='d-flex justify-content-center'>
                          <p style={{ fontFamily: 'cursive', fontSize: '13px' }} className='fw-bold'>${product.price}/day</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
            ) : (
              <p>No products found</p>
            )}
  
          </Row>
        )}
      </div>

    </div>
    </>
  );
}

export default SearchProducts;
