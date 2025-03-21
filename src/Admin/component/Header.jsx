import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="bg-dark">
        <Navbar className="bg-body-dark text-light">
          <Container className="d-flex justify-content-between align-items-center">
            <Navbar.Brand className="text-light" href="#home">
            <Link className='text-decoration-none text-light' to={'/'}> <p className='m-2'>Rentify</p></Link>

              </Navbar.Brand>
            <div className="text-light d-flex">
             <Link className='text-decoration-none text-light' to={'/admin/orders'}> <p className='m-2'>Order</p></Link>
             <Link className='text-decoration-none text-light' to={'/admin/dashBoard'}> <p className='m-2'>DashBoard</p></Link>
             <Link className='text-decoration-none text-light' to={'/admin/items'}> <p className='m-2'>Items</p></Link>
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

export default Header;
