import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import System35 from '../assets/images/system_35.png'
import AmbitusCircle from '../assets/images/ambitus_crcl.gif'

import translateDangerous from '../utils/utilities';
import { useTranslation } from "react-i18next";

export default function Home() {
    const { t } = useTranslation();
  return (
    <>
  
        <Container id='home'>
            <Row>
                <Col className='me-4'>
                    <h1 className='title mt-5'>  {translateDangerous(t, 'i18n.main.water_recycling_and')}</h1>
                <img className="img-fluid system90" src={System35} alt="" />
                </Col>
                <Col >
                    <div className='text-left'>
                    <img className="img-fluid"  src={AmbitusCircle} alt="" />

                    {translateDangerous(t, 'i18n.main.compact_and_efficient')}
                    </div>
                </Col>
            </Row>
        </Container>

    </>
  )
}
