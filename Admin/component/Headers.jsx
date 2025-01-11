import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Headers() {
  return (
    <>
      <div className="bg-dark">
        <Navbar className="bg-body-dark text-light">
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand className="text-light" href="#home">Rentify</Navbar.Brand>
            <div className="text-light d-flex">
              <p className='m-2'>Order</p>
              <p className='m-2'>DashBoard</p>
            </div>
            <div>
              <button className="btn btn-light">Logout</button>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Headers;
