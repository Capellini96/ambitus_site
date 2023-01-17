import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/logo.svg'
import { CgFileDocument } from "react-icons/cg";
import { useState } from 'react';
import { Modal} from 'react-bootstrap';
import { useTranslation } from "react-i18next";



function Navbars() {
  const { t, i18n } = useTranslation();
  const [language, setlanguage] = useState('en_us')

  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);






    function handleLangClick(lang) {
      i18n.changeLanguage(lang);
      setlanguage(lang)
      // alert(lang)
    }
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
          <Nav.Link className='navlinkNormal' href="#">{t('i18n.main.home')}</Nav.Link>
            <Nav.Link className='navlinkNormal' href="#applications" >{t('i18n.main.applications')}</Nav.Link>
            <Nav.Link className='navlinkNormal' href="#legislation">{t('i18n.main.legislation')}</Nav.Link>
            {/* <Nav.Link className='navlinkNormal' href='#case'>{t('i18n.main.case_studies')}</Nav.Link> */}
            <Nav.Link className='navlinkNormal' href='#partners' >{t('i18n.main.partners')}</Nav.Link>
            <Nav.Link className='navlinkNormal' href='#Contact' >Contacts</Nav.Link>
            <Nav.Link>
                  <button className="btn_language" onClick={() => handleLangClick("en_us")} >EN</button>&nbsp;&nbsp;|&nbsp;&nbsp;
                  <button className="btn_language" onClick={() => handleLangClick("pt_br")} > PT </button>
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
    </>
  );
}

export default Navbars;