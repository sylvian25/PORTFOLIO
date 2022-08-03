import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav,Form } from 'react-bootstrap';
import search from '../Assets/images/search.png'
import Group from '../Assets/images/Group 5.png'
import '../Assets/css/header.css'
const Header = () => {
    return ( 
        <Navbar className='nav' expand="lg">
        <Container fluid className='Nav-body'>
    <Navbar.Brand className='nav-brand' id='buynbulk' href="#home">BuynBulk</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
                <ul>
                    <a href="."> <li> Home</li> </a>
                    <a href="."> <li> Categories</li> </a>
                    <a href="."> <li> About us</li> </a>
                    <a href="../Co"> <li> Contact</li> </a>
                </ul>
              {/* <Nav.Link className='nav-link' href="#action1">Home</Nav.Link>
              <Nav.Link className='nav-link' href="#action3">Categories</Nav.Link>
              <Nav.Link className='nav-link' href="#action4">About us</Nav.Link>
              <Nav.Link className='nav-link' href="#action5">Contact</Nav.Link> */}
              <Nav className="me-auto">
      </Nav>          
            </Nav>
            <Form className="d-flex">
            <div className="searchSection">
              <div className="searchBtn">
              <input type="search" placeholder="search" />
              <img className='imgSearch' src={search} alt='Search_button'/>
              
            
              </div>
              <img className='cart' src={Group} alt='Search_button'/>
          </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}
 
export default Header;