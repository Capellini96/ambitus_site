import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import FadeInSection from './UI/FadeComp'
import System90 from "../assets/images/secondProt.png"
import hotel from '../assets/images/app_hotels.png';
import commercial from '../assets/images/app_commercial.png';
import hospital from '../assets/images/hospital.jpg';

import translateDangerous from '../utils/utilities';
import { useTranslation } from "react-i18next";

export default function Applications() {
    const { t } = useTranslation();

  return (
    <>
    <FadeInSection>
        <Container>
            <Row>
                <Col sm className='me-4'>
                <img className="img-fluid system90" src={System90} alt="" />
                <p className='text-center small-blue'>{t('i18n.main.system_dimension')}</p>
                </Col>
                <Col sm className='mt-5' >
                    <div className='text-left mt-5'>
                        <h1 className='title mt-5'>{t('i18n.main.design_efficient')}</h1><p></p>
                        <p>{translateDangerous(t,'i18n.main.structure_in_steel')}</p>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container id='applications' className='mt-5'>
            <div className='text-center'>
                <h1 className='title'>{t('i18n.main.applications')}</h1>
            </div>
            
            <Row className='mt-5'>
                <Col >
                <div className="appImg" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)), url(${hotel})`}}>
                    <h1 className='blueletters text-center'>{translateDangerous(t, 'i18n.main.app_hotels')}</h1>
                     <div className="applists">
                         <ul>
                             {translateDangerous(t, 'i18n.main.app_hotels_items')}
                         </ul>
                     </div>
                </div>
                </Col>
                <Col>
                <div className="appImg" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)), url(${commercial})`}}>
                    <h1 className='blueletters text-center'>{translateDangerous(t, 'i18n.main.app_commercial')}</h1>
                    <div className="applists">
                        <ul>
                        {translateDangerous(t, 'i18n.main.app_commercial_items')}
                        </ul></div>
                </div>
                </Col>
                <Col>
                <div className="appImg" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)), url(${hospital})`}}>
                    <h1 className='blueletters text-center'>{translateDangerous(t, 'i18n.main.app_hospital')}</h1>
                     <div className="applists">
                         <ul>
                         {translateDangerous(t, 'i18n.main.app_hospital_items')}
                         </ul>
                             
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </FadeInSection>
    </>
  )
}
