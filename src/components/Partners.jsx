import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import FadeInSection from './UI/FadeComp'
import aband from '../assets/images/partner_Alves_Bandeira.png'
import stex from '../assets/images/partner_stex.png'
import oxygen from '../assets/images/partner_oxygen.svg'


export default function Home() {

  return (
    <>
        <FadeInSection>
            <h1 className='title text-center'>Partners</h1>
           <Container className='partners_container' id='partners'>
                <Row className='text-center'>
                   <Col>
                    <img  src={aband} className="partner_logos" alt="logo alves bandeira" />
                    </Col>
                    <Col>
                    <img  src={stex} className="partner_logos" alt="logo stex" />
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col>
                    <img  src="https://www.oceanus.bio.br/wp-content/uploads/2021/07/logo_oceanus-300x107.png"  className="partner_logo1" alt="logo oceanus" />
                    </Col> 
                    <Col>
                    <img  src={oxygen} className="partner_logos" alt='logo oxygen' />
                    </Col>
                </Row>
            </Container>

        </FadeInSection>
    </>
  )
}
