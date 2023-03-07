import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import FadeInSection from './UI/FadeComp'
import aband from '../assets/images/partner_ab.jpeg'
import stex from '../assets/images/partner_stex.png'
import oxygen from '../assets/images/partner_oxygen.svg'
import tecnolavagem from '../assets/images/logo_tecnolavagem.png'
import nortozon from '../assets/images/partener_nortozon.jpg'

import translateDangerous from '../utils/utilities';
import { useTranslation } from "react-i18next";


export default function Home() {
  const { t } = useTranslation();

  return (
    <>
        <FadeInSection>
            <h1 className='title text-center'>{t('i18n.main.partners')}</h1>
           <Container className='partners_container mt-5' id='partners'>
                <Row className='text-center'>
                   <Col>
                    <img  src={aband} className="partner_logos2" alt="logo alves bandeira" />
                    </Col>
                    <Col>
                    <img  src={stex} className="partner_logos2" alt="logo stex" />
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
                <Container >
                <Row className='text-center'>
                    <Col>
                    <a href="https://tecnolavagem.com/" target="_blank">
                    <img src={tecnolavagem} className="partner_logo1 mb" alt='logo tecnolavagem'/>
                    </a>
                    </Col> 
                    <Col>
                    <img  src={nortozon} className="partner_logo1" alt='logo nortozon' />
                    </Col>
                </Row>
                </Container>
            </Container>

        </FadeInSection>
    </>
  )
}
