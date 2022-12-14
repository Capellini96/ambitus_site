import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Crowdeal from '../assets/images/Crowdeal.svg'
import FadeInSection from './UI/FadeComp'
import Crowdeal1 from '../assets/images/Xcrow_illustration_5.png'


export default function SixthSection() {
  return (
    <>
      <FadeInSection>
        <Container>
           <img src={Crowdeal1} alt="crow handshake" className='smartDisputesImgMobile' />
          <Row>
            <Col>
              <h2 className='space-10 title'>Smart disputes</h2>
              <br />
              <p className='light-text mt-2 removeMobile'>
              Smart Disputes are designed to settle social disagreements using smart contracts. 
They surpass betting and gambling. The goal is not about winning money. It's about showing commitment to your opinion, clearly extinguishing a social argument, and gaining recognition for being right. 

              </p>
              <p className='blueletters mt-5'>
              Put your money where your mouth is

              </p>
              <p className='light-text mobileEdit mt-5 '>
              Staking your money is just a way to ensure that each side faithfully records their position and endures the outcome. 
              Everybody will witness your bold move when you pick a crow with someone in an open dispute. 
              Whenever a conflict arises, you can use Smart Disputes as a tool to settle the problem impartially. 
              </p>
            </Col>
            <Col className='smartDisputesImageCol'>
              <img src={Crowdeal1} alt="crow handshake" className='bigImages smartDisputesImgRow' />
            </Col>
          </Row>
        </Container>
      </FadeInSection>
    </>
  )
}
