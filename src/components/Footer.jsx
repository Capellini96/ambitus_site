import React from 'react';
import logo from '../assets/images/logo.svg'
import { Container, Col, Row } from 'react-bootstrap';

export default function Footer() {
  let newDate = new Date()
  let year = newDate.getFullYear();
  return (

    <Container style={{backgroundColor: "#0E221E"}} className='text-center text-lg-start text-muted'  id ="Contact">
       <section className='d-flex justify-content-center justify-content-lg-between p-4'></section>
      <section className='footer-bg mt-4'>
        <Container>
          <Row className='mt-3'>
            <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='footer-title'>
                <img src={logo} alt="logo XCROW" width={"50px"}/>
                Ambitus strategy
              </h6>
              <p className='light-text'>
           
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='footer-title'>Useful links</h6>
              <p className=' mt-4'>
                <a href='https://drive.google.com/file/d/16ZsziAvQJDOoilZ9O-7nJKVe7QY4HJR2/view' className='footer-text'>
                  Litepaper
                </a>
              </p>
              <p>
                <a href='https://drive.google.com/file/d/1IEKRxVeJduDcRvMia-pbIcBXM3UIz-N3/view' className='footer-text'>
                  Whitepaper
                </a>
              </p>
              <p>
                <a href='https://docs.xcrow.net/docs/FAQS/General' className='footer-text'>
                  FAQ's
                </a>
              </p>
             
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-5'>
              <h6 className='footer-title'>Contact</h6>
              <p className="light-text">
                <a  className='footer-text' href="mailto:hello@xcrow.net">
                hello@xcrow.net
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <div className='text-center p-4 footer-bg light-text' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ©{year} Ambitus Strategy, LDA
     
      </div>
      </Container>
  );
}