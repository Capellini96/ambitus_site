import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import System35 from '../assets/images/system_35.png'
import AmbitusCircle from '../assets/images/ambitus_crcl.gif'

export default function Home() {

  return (
    <>
  
        <Container id='home'>
            <Row>
                <Col className='me-4'>
                    <h1 className='title mt-5'>  Water Recycling &
                Treatment Services</h1>
                <img className="img-fluid system90" src={System35} alt="" />
                </Col>
                <Col >
                    <div className='text-left'>
                    <img className="img-fluid"  src={AmbitusCircle} alt="" />
                    <li className='diamond-text'>Compact & Configurable</li>
                    <li className='diamond-text'>Low Operating Cost</li>
                    <li className='diamond-text'>Up to 90% Recycled Efficiency</li>
                    <li className='diamond-text'>Blockchain Ready (*OxygenChain)</li>
                    </div>
                </Col>
            </Row>
        </Container>

    </>
  )
}
