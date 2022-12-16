import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'

import FadeInSection from './UI/FadeComp'
import System90 from "../assets/images/secondProt.png"
import hotel from '../assets/images/app_hotels.png';
import commercial from '../assets/images/app_commercial.png';
import hospital from '../assets/images/app_hospital.png';


export default function Applications() {

  return (
    <>
    <FadeInSection>
        <Container>
            <Row>
                <Col sm className='me-4'>
                <img className="img-fluid system90" src={System90} alt="" />
                <p className='text-center small-blue'>APPROX. Dimensions(1 M3/H): 2.3M X 1.0M X 2.0M</p>
                </Col>
                <Col sm className='mt-5' >
                    <div className='text-left mt-5'>
                    <h1 className='title mt-5'>  Designed for Worse Case Scenarios</h1>
                    <li className='diamond-text mt-5'>Structure in galvanized Steel (SKID)</li>
                    <li className='diamond-text'>High surface Mineral Filter</li>
                    <li className='diamond-text'>Hydoanthracite Zeolite Filter</li>
                    <li className='diamond-text'>WasteWater Collection Pump</li>
                    <li className='diamond-text'>Instant Flow Meter and Totalizer; Mixer and Water Softner</li>
                    <li className='diamond-text'>Line Filters; Ultraviolet (UV-C) Disinfection System</li>
                    <li className='diamond-text'>Dosing Pumps</li>
                    <li className='diamond-text'>Control Panel</li>
                    <li className='diamond-text'>Reagents (Flocculant/Coagulant of plant origin)</li>
                    <li className='diamond-text'>Chemical Disinfectant, Oxidant for decomposition of residual detergent</li>
                    </div>
                </Col>
            </Row>
        </Container>
        <Container id='applications' className='mt-5'>
            <div className='text-center'>
                <h1 className='title'>Applications</h1>
            </div>
            
            <Row className='mt-5'>
                <Col >
                <div className="appImg" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)), url(${hotel})`}}>
                    <h1 className='blueletters text-center'>Apartments & Hotels</h1>
                     <div className="applists">
                         <ul>
                             <li className='diamond-text'>Laundry</li>
                             <li className='diamond-text'>Landscaping</li>
                             <li className='diamond-text'>Garages</li>
                             <li className='diamond-text'>Spas</li>
                             <li className='diamond-text'>Gyms</li>
                         </ul>
                     </div>
                </div>
                </Col>
                <Col>
                <div className="appImg" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)), url(${commercial})`}}>
                    <h1 className='blueletters text-center'>Comercial</h1>
                    <div className="applists">
                        <ul>
                            <li className='diamond-text'>Gas Stations</li>
                            <li className='diamond-text'>Car Washes</li>
                            <li className='diamond-text'>Gas Stations</li>
                            <li className='diamond-text'>Laundry Mats</li>
                            <li className='diamond-text'>Bus Garages</li>
                            <li className='diamond-text'>Industries</li>
                            <li className='diamond-text'>Restaurants</li>
                        </ul></div>
                </div>
                </Col>
                <Col>
                <div className="appImg" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.6)), url(${hospital})`}}>
                    <h1 className='blueletters text-center'>Hospitals</h1>
                     <div className="applists">
                         <ul>
                             <li className='diamond-text'>Laundry</li>
                             <li className='diamond-text'>Fleet Vehicle Washes</li>
                             <li className='diamond-text'>Landscaping</li>
                             <li className='diamond-text'>Sewage Treatment</li>
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
