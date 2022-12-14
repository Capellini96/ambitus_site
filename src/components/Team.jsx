import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import birds from '../assets/images/birds.svg'
import linkedin from '../assets/images/linkedin.svg'
import Circle from '../assets/images/Circle.svg'
import AlexXcrow from '../assets/images/team/AlexXcrow.png'
import MariaXcrow from '../assets/images/team/MariaXcrow.png'
import RobertXcrow from '../assets/images/team/RobertXcrow.png'
import HenriqueXcrow from '../assets/images/team/HenriqueXcrow.png'
import JaydenXcrow from '../assets/images/team/JaydenXcrow2.png'
import DanielXcrow from '../assets/images/team/DanielXcrow.png'
import AlfonsoXcrow from '../assets/images/team/AlfonsoXcrow.png'
import EduardaXcrow from '../assets/images/team/EduardaXcrow.png'
import PintoXcrow from '../assets/images/team/PintoXcrow.png'
import MiguelXcrow from '../assets/images/team/MiguelXcrow.png'

export default function Team() {


    return (
        <>
            {/* |||||||||||||||||||||||||||||||||||||||||||big screens||||||||||||||||||||||||||||||||||||||| */}
            <Container className='space-10'>
                <img src={birds} alt='birds' className='center little-birds' />
                <h3 className='title text-center mt-3'>Team</h3>
                <p className='team-title mt-3'>The inspiring members behind the Flock</p>
                <Row className='space-10 bigScreenTeam'>
                    <Col>
                        <img src={PintoXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Francisco Pinto</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/franciscotpinto/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Chief Executive Officer & Founder</h5>
                        <p className='light-text text-center mt-4'>Mechanical Engineer from FEUP with nearly five years of experience in an international company, managing projects, processes, and cross-functional teams. Cryptocurrencies enthusiast, with experience building small projects with React and Solidity.</p>
                    </Col>
                    <Col>
                        <img src={HenriqueXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Henrique Capelas</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/henriquecapelas/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'> Chief Token Officer & Founder</h5>
                        <p className='light-text text-center mt-4'>Into cryptocurrency since 2014, focused on finding the best crypto projects, managed small investment groups, ICO consultant.</p>
                    </Col>
                    <Col>
                        <img src={AlexXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Alexandre Capelas</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/alexandre-capelas-69a520193/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Co-Chief Technology Officer & Founder</h5>
                        <p className='light-text text-center mt-4'>Software developing since 2012 , into cryptocurrency since 2015, assembling numerous miners and programming in a variety of languages. Working with AWS systems and Web3 technologies.
                        </p>
                    </Col>

                </Row>
                <Row className='mt-5 bigScreenTeam'>
                    <Col>
                        <img src={RobertXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Robert Colvin</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/rcolvin/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Co-Chief Technology Officer</h5>
                        <p className='light-text text-center mt-4'>Decades of executive and technology experience, including P2P networks, SIP, WebRTC, RTMFP, Ethereum etc...., Directing teams at leading companies, including Adobe,  WashingtonPost, ExxonMobil, CenterPoint Energy, Peak6 and more.</p>
                    </Col>
                    <Col>
                        <img src={EduardaXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Eduarda Ferreira</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/eduardapsferreira/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Chief Marketing Officer</h5>
                        <p className='light-text text-center mt-4'>Experienced Digital Marketer with 9+ years of experience in digital strategy focused on branding, marketing, web design, and innovation.
                        </p>
                    </Col>
                    <Col>
                        <img src={MariaXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Maria Joao Mouro</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/mariajoaomouro/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Digital Marketing Manager</h5>
                        <p className='light-text text-center mt-4'>Experience in digital marketing focusing on social media strategy, SEO and email marketing.</p>
                    </Col>
                    <Col>
                        <img src={MiguelXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Miguel Oliveira</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/miguelcapelas/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Digital Media Manager</h5>
                        <p className='light-text text-center mt-4'>Academic background in Communication Sciences at Universidade Católica, with 10+ years of experience in digital media, project, and team management.</p>
                    </Col>

                </Row>
                {/* |||||||||||||||||||||||||||||||||||||||||||SMALL screens||||||||||||||||||||||||||||||||||||||| */}
                <Row className='mobileTeam'>
                    <Col s={4} xs={4} className="adjustPadding">
                        <img src={PintoXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Francisco Pinto</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/franciscotpinto/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Chief Executive Officer & Founder</h5>
                    </Col>
                </Row>
                <Row className='mobileTeam'>
                    <Col s={4} xs={4} >
                        <img src={HenriqueXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Henrique Capelas</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/henriquecapelas/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Chief Token Officer & Founder</h5>
                    </Col>
                </Row>
                <Row className='mobileTeam'>
                    <Col s={4} xs={4}>
                        <img src={AlexXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Alexandre Capelas</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/alexandre-capelas-69a520193/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Co-Chief Technology Officer & Founder</h5>
                    </Col>
                </Row>
                <Row className='mobileTeam'>
                    <Col s={4} xs={4}>
                        <img src={RobertXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Robert Colvin</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/rcolvin/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'> Co-Chief Technology Officer</h5>
                    </Col>
                </Row>

                <Row className='mobileTeam'>
                    <Col s={4} xs={4}>
                        <img src={EduardaXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Eduarda Ferreira</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/eduardapsferreira/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Chief Marketing Officer</h5>
                    </Col>
                </Row>
                <Row className='mobileTeam'>
                    <Col s={4} xs={4}>
                        <img src={MariaXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Maria Joao Mouro</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/mariajoaomouro/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Digital Marketing Manager</h5>
                    </Col>
                </Row>
                <Row className='mobileTeam'>
                    <Col s={4} xs={4}>
                        <img src={MiguelXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Miguel Oliveira</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/miguelcapelas/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Digital Media Manager</h5>
                    </Col>
                </Row>
   



            </Container>
            <Container className='space-10 mb-5 advisors'>
                <h4 className='title text-center mt-3'>Industry-leading Advisors</h4>
                <Row className='space-10 advisorsBigScreen'>
                    {/* <Col>
                        <img src={teamImage} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Nuno Mendonça</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/nunomendoncamd/'> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>CMO Bial Biotech</h5>
                        <p className='light-text text-center mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis, tellus a volutpat laoreet, ex odio porttitor neque, ut lacinia diam magna at erat.
                            Aenean vehicula nulla eget hen-drerit volutpat. Suspendisse interdum convallis ultricies.</p>
                    </Col> */}
                    <Col>
                        <img src={JaydenXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Jayden Sage</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/jayden-sage/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Entrepreneur</h5>
                        <p className='light-text text-center mt-4'>Jayden Sage is a Wall Street Mathematician who has been in the Blockchain space since 2011. He serves as a Speaker and Advisor to startups, universities, governments, and industry. He is an Angel Investor in various metaverse ecosystems.</p>
                    </Col>
                    <Col>
                        <img src={DanielXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Daniel Ferreira</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/daniel-ferreira-98360b76/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>CEO Oxygenchain</h5>
                        <p className='light-text text-center mt-4'>Environmental entrepreneur and business developer with decades of experience chemical analyses, remediation
                            monitoring of soil & water and waste treatment;
                            Specializing in research and development for companies like Shell, Chevron, Petrobras, Vale and Coca-Cola.</p>
                    </Col>
                    <Col>
                        <img src={AlfonsoXcrow} alt='team' className='center' />
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Alfonso Bonillas</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/alfonsobonillas/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'> CEO Alio IT</h5>
                        <p className='light-text text-center mt-4'>Innovative thinker, dedicated to developing new technology or any other trend creating ideas and turning them to reality. Have worked with other great people and in high-tech companies looking to build or use the latest technologies to solve day-to-day problems in the smart cities space, web3, fintech, etc.</p>
                    </Col>
                </Row>

                {/* <Row className='advisorsMobile'>
                    <Col s={4} xs={4} className="adjustPadding">
                        <img src={teamImage} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                        <span className='diamond-text'>Nuno Mendonça</span>
                        <a target='_blank' className='no-line' href='https://www.linkedin.com/in/nunomendoncamd/'> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>CMO Bial Biotech</h5>
                    </Col>
                </Row> */}
                <Row className='mobileTeam'>
                    <Col s={4} xs={4} >
                        <img src={JaydenXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Jayden Sage</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/jayden-sage/'rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>Entrepreneur</h5>
                    </Col>
                </Row>
                <Row className='mobileTeam'>
                    <Col s={4} xs={4}>
                        <img src={DanielXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Daniel Ferreira</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/daniel-ferreira-98360b76/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>CEO OxygenChain</h5>
                    </Col>
                </Row>
                <Row className='mobileTeam'>
                    <Col s={4} xs={4}>
                        <img src={AlfonsoXcrow} alt='team' className='center' />
                    </Col>
                    <Col className='teamRole'>
                        <h3 className='text-center mt-3'>
                            <span className='diamond-text'>Alfonso Bonillas</span>
                            <a target='_blank' className='no-line' href='https://www.linkedin.com/in/alfonsobonillas/' rel="noopener noreferrer"> <img src={linkedin} alt='linkedin icon' /></a>
                        </h3>
                        <h5 className='role-text text-center mt-3'>CEO Alio IT</h5>
                    </Col>
                </Row>
                <img src={Circle} alt='xcrow background' className='imgCircle' />
            </Container>
        </>
    )
}
