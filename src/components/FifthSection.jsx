import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import demo from '../assets/images/demo.svg'
import XMarksMobile from '../assets/images/XMarksMobile.svg'
import FadeInSection from './UI/FadeComp'
import XGIF from '../assets/Xcrow_animation.gif'

export default function FifthSection() {
  return (
    <>
    <FadeInSection>
      <Container className='containerX'>


        <Row className='mt-5 rowXMobile'>
          <Col xl={7} className='mt-5'>
            <img src={XGIF} className="bigImages" alt="demo of XCROW app" />
          </Col>
          <Col className='smallRow'>
            <Container>
              <h2 className='title xMarksTitle'> X marks the spot</h2>
              <p className='light-text mt-4'>
              You can pick whether a specific cryptocurrency will go above or lower a certain price at a selected date and challenge the know-it-alls. 
              The result is settled by a decentralized oracle.
              </p>
              <Container>
                <img className='XMarksMobileImg' src={XGIF} alt="demo of XCROW app"/>
              </Container>
              <p className='light-text mt-4'>
              The dispute system allows total customization of your challenge to fit any topic you are arguing about on social media. 
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
      </FadeInSection>
    </>

  )
}
