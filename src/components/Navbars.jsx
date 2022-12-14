import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.svg'
import { CgFileDocument } from "react-icons/cg";
import { useState } from 'react';
import { Modal} from 'react-bootstrap';


function Navbars() {

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Navbar bg="bg-xcrow" expand="lg" variant="dark">
      <Container >
        <Navbar.Brand href="#">
          <img src={logo} alt='logo'
            className='nav-logo '
          />
          Ambitus Strategy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '200px' }}
            navbarScroll
          >
          
          </Nav>
          <Nav.Link className='navlinkNormal' href="#">Home</Nav.Link>
            <Nav.Link className='navlinkNormal' href="#applications" target="_blank" rel="noopener noreferrer">Applications</Nav.Link>
            <Nav.Link className='navlinkNormal' href="#legislation">Legislation</Nav.Link>
            <Nav.Link className='navlinkNormal' href='#case' target="_blank" rel="noopener noreferrer">Case Studies</Nav.Link>
            <Nav.Link className='navlinkNormal' href='https://docs.xcrow.net' target="_blank" rel="noopener noreferrer">Parteners</Nav.Link>
            <Nav.Link className='navlinkNormal' href='https://docs.xcrow.net' target="_blank" rel="noopener noreferrer">Contacts</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
    </>
  );
}

export default Navbars;