import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import menWomen from '../assets/menwomen.jpg';
import { useNavigate } from 'react-router-dom';

function SubHead() {
  const navigate = useNavigate();

  const handleCategory = (category) => {
    console.log('Selected Category:', category);
    navigate(`/category?category=${category}`);
  };

<!-- retur{} -->
    <Row className='w-100 sub-head mt-1'>
      <div className='d-flex justify-content-center w-100 hover-container mt-3' style={{ backgroundColor: 'rgb(255, 255, 255)', overflowX: 'auto' }}>
        <Button
          className='d-flex flex-column justify-content-center align-items-center fw-bold hover-button m-1'
          variant=""
          style={{ fontSize: '12px', fontFamily: 'cursive' }}
          onClick={() => handleCategory("Men")}
        >
          <img className='sub-img img-fluid border shadow' src={menWomen} alt="Men" />
          <p className='text-center'>Men</p>
        </Button>
        {/* Add more categories as needed */}
      </div>
    </Row>
  );
}

export default SubHead;



import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import chrdar2 from '../assets/chrdar2.png';
import { useLocation } from 'react-router-dom';
import { selectCategory } from '../../services/allApi';

function Category() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get('category');
  const [categoryDetails, setCategoryDetails] = useState([]);

  useEffect(() => {
    const fetchCategoryDetails = async () => {
      try {
        const result = await selectCategory(category);
        if (result.status === 200) {
          setCategoryDetails(result.data);
        }
      } catch (err) {
        console.error('Error fetching category details:', err);
      }
    };

    if (category) {
      fetchCategoryDetails();
    }
  }, [category]);

  <!-- return ( -->
    <div>
      <Row>
        <div className='d-flex align-items-center justify-content-center'>
          {
            categoryDetails.length > 0 ? categoryDetails.map((prod) => (
              <Col lg={3} md={6} sm={6} key={prod._id}>
                <Card style={{ width: '13rem', height: '19rem' }} className='p-1 mb-2 border-none'>
                  <div className='img-wrapper img-fluid w-100 d-flex text-center justify-content-center align-items-center'>
                    <Card.Img className='card-img img-fluid' variant="top" src={chrdar2} />
                  </div>
                  <Card.Body>
                    <Card.Title>
                      <p className='text-center' style={{ fontSize: '15px', fontFamily: 'cursive' }}>{prod.name}</p>
                    </Card.Title>
                    <Card.Text className='d-flex justify-content-between'>
                      <p style={{ fontFamily: 'cursive', fontSize: '13px' }} className='fw-bold'>${prod.price}/day</p>
                      <p><i className="fa-solid fa-cart-shopping"></i></p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))
            : <div>No products</div>
          }
        </div>
      </Row>
    </div>
  );
}

export default Category;


