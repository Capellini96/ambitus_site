import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import imgThirdsec from '../assets/images/Frame 263.png'

import imgThirdsec1 from '../assets/images/Xcrow_illustration_3.png'
import diamond from '../assets/images/diamond.svg'
import FadeInSection from './UI/FadeComp';

function ThirdSection() {
    return (
        <>
        
            <FadeInSection>
                <div id='About'>
                    <Container className='sector'>
                        <Row className='mobileRow'>
                            <Col className='colDismissMobile'>
                                <img className="diamondHands d-block w-100" src={imgThirdsec1} alt="Man with diamond"  />
                            </Col>
                            <Col className='sectorText'>
                                <Container className='space-10'>
                                    <h2 className='title'>Challenge anyone on anything</h2>
                                    <br />
                                    <span className='small-blue'><b>Have the courage to stand by your opinion.</b> </span>
                                    <span className='normalText'> Join the social revolution by settling never-ending disputes on social media.

                                    </span>
                                    <Container className='normalDiamondText'>
                                        <p className='mt-4 diamond-text mobile-text'>
                                            <img src={diamond} alt="diamond" className='me-3 diamondImg' />
                                            Challenge your opponent
                                        </p>

                                        <p className='diamond-text mobile-text'>
                                            <img src={diamond} alt="diamond" className='me-3 diamondImg' />
                                            Win your $reward
                                        </p>
                                        <p className='diamond-text mobile-text'>
                                            <img src={diamond} alt="diamond" className='me-3 diamondImg' />
                                            Share the proof of victory NFT 
                                        </p>
                                    </Container>

                                    <Container className="mobileDiamondText">
                                        <Row className='alignRows'>
                                            <Col s={2} xs={2}>
                                                <img src={diamond} alt="diamond" className='me-3' />
                                            </Col>
                                            <Col>
                                                <p className='mt-4 diamond-text'>
                                                Challenge your opponent
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row className='alignRows'>
                                            <Col s={2} xs={2}>
                                                <img src={diamond} alt="diamond" className='me-3' />
                                            </Col>
                                            <Col>
                                                <p className='diamond-text'>

                                                Win your $reward
                                                </p>
                                            </Col>
                                        </Row>
                                        <Row className='alignRows'>
                                            <Col s={2} xs={2}>
                                                <img src={diamond} alt="diamond" className='me-3' />
                                            </Col>
                                            <Col>
                                                <p className='diamond-text'>

                                                Share the proof of victory NFT 
                                                </p>
                                            </Col>
                                        </Row>
                                    </Container>

                                    <span className='normalText'>Build a legacy from your knowledge and </span>
                                    <span className='small-blue'> <b> proudly share the winning certificates NFT</b> </span>
                                    <span className='normalText'>with your friends or on social media.</span>
                                </Container>
                            </Col>
                        </Row>

                    </Container>
                </div>
            </FadeInSection>
        </>
    )
}
export default ThirdSection;