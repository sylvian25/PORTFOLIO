

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav,Form } from 'react-bootstrap';
import search from '../Assets/images/search.png'
import Group from '../Assets/images/Group 5.png'
import Avatar from '../Assets/images/avatar.png'
// import { FaAngleDown} from 'react-icons/fa'
import '../Assets/css/header.css'
const Header = () => {
    return ( 
        <Navbar className='nav' expand="lg">
        <Container fluid className='Nav-body'>
    <Navbar.Brand className='nav-brand' id='buynbulk' href="#home">BuynBulk</Navbar.Brand>
    <Navbar.Collapse className='' id="navbarScroll">
          <Navbar.Toggle aria-controls="navbarScroll" />
            <Nav
              
            >
                <ul>
                    <a href="./"> <li> Home</li> </a>
                    <a href='/categories'> <li> Categories</li> </a>
                    <a href="."> <li> About us</li> </a>
                    <a href="."> <li> Contact</li> </a>
                </ul>
           
              <Nav className="me-auto">
      </Nav>          
            </Nav>
            <Form className="d-flex">
            <div className="searchSection">
              <div className="searchBtn">
              <input type="search" placeholder="search" />
              <img className='imgSearch' src={search} alt='Search_button'/>
              
            
              </div>
              <img className='user-profile' src={Avatar} alt="user-profile" />
              <div className="icon">
              {/* <FaChevronDown /> */}
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