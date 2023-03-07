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
                Ambitus Strategy
              </h6>
              <p className='light-text'>
           
              </p>
            </Col>

            <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
          
             
            </Col>

            <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-5'>
              <h6 className='footer-title'>Contact</h6>
              <p className="light-text">
                <a  className='footer-text' href="mailto:d.ferreira@ambitustrategy.com">
                a.capelas@ambitustrategy.com
                </a>
              </p>
              <p className='light-text'>+351925460087</p>
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