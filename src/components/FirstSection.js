import { Col, Container, Row, Modal} from 'react-bootstrap';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import discussion from '../assets/images/discussion.svg'
import parteners from '../assets/images/parteners.svg'
import discussion1 from '../assets/images/Xcrow_illustration_1.png'
import twitterIcon2 from '../assets/images/twittericon2.svg'
import linkedinIcon from "../assets/images/linkedinicon.svg"
import { FaDiscord, FaTelegram } from 'react-icons/fa';
import { CgFileDocument } from "react-icons/cg";
import wallet from '../assets/images/Xcrow_illustration_2.png'


function FirstSection() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container fluid className='socialMediaIcons'>
                <a href="https://twitter.com/xcrowdisputes" target="_blank" rel="noopener noreferrer"> <img className="twitterIcon" src={twitterIcon2} alt="socialMedia" ></img></a>
                <br />
                <a href="https://www.linkedin.com/company/xcrow/" target="_blank" rel="noopener noreferrer"><img className="linkedinIcon" src={linkedinIcon} alt="socialMedia" ></img></a>
                <br />
                <Container className='teleContainer'>
                <a href="https://t.me/XcrowDisputes" target="_blank" rel="noopener noreferrer" className='a-none'> <FaTelegram className='tele'/></a>
                <br />
                </Container>
                <Container className='discordContainer'>
                    <a href="https://discord.gg/aNsphcdsEK" target="_blank" className='a-none' rel="noopener noreferrer"> <FaDiscord className='discordIcon' /></a>
                </Container>
            </Container>

            <Container className="docsContainer">
                <a className='a-none' href="https://docs.xcrow.net" target="_blank" rel="noopener noreferrer">
                    <CgFileDocument className='docsIcon' />
                    <p className='horizontalLetters'>DOCS</p></a>
            </Container>
            <Container className='space-10'>
                <Carousel className='carousel'  controls={false}>
                    <Carousel.Item interval={10000}>
                        <Container className='padded-bottom'>
                            <Row>
                                <Col>
                                    <Row>
                                        <h1 className='title'>Settle endless<br/> online disputes</h1>
                                        <h2 className='subtitleOrange smallspaceUP '>Convert them to challenges.</h2>
                                        <h2 className='subtitleBlue'>Earn Recognition.</h2>
                                    </Row>
                                    <Row className='bigspaceUP'>
                                        <img className="partenersImg" src={parteners} alt="XCROW parteners" />
                                        <p className='normalText smallspaceUP bottom'>An easy-to-use, customizable smart-disputes platform built on Polygon <br/>and powered by Chainlink.

                                        </p>
                                    </Row>
                                </Col>
                                <Col lg={5}>
                                    <img
                                        className="bigImages"
                                        src={discussion1}
                                        alt="First slide"
                                    />
                                </Col>

                            </Row>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <Container className='padded-bottom'>
                                <Row className='mb'>
                                    <Col>
                                        <Row >

                                            <h1 className='title'>Be one of the ultimate $CROW<br /> Official Token Holders</h1>
                                            <h2 className='light-text'>Seize your spot on XCROW IDO Whitelist and <br />get exclusive access to the MVP</h2>
                                        </Row>
                                        <Row >
                                            <div className='text-center mt-2'>
                                                <div className='pador' onClick={handleShow}>I want to join the nest</div>
                                            </div>
                                        </Row>
                                    </Col>
                                    <Col lg={5}>
                                        <img
                                            className="bigImages"
                                            src={wallet}
                                            alt="First slide"
                                        />
                                    </Col>

                                </Row>
                            </Container >
                        {/* <Container className='carousel-card padded-bottom'>
                         
                            <h2 className='title '>Be one of the ultimate $CROW <br />Official Token Holders</h2>
                            <h2 className='light-text pd'>Seize your spot on XCROW IDO Whitelist and <br />get exclusive access to the MVP</h2>
                            <div className='text-center mt-5 pdb'>
                                <div className='pador' onClick={handleShow}>I want to join the nest</div>
                            </div>
                            
                        </Container> */}
                    </Carousel.Item>
                </Carousel>
            </Container>
            <Modal show={show} onHide={handleClose} className='modal' >
                <Modal.Header closeButton className='modalHeader'>
                    <Modal.Title className='modalHeader'>Token will be launched soon!</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBg'>For more information please join our community at discord and follow us on social media.</Modal.Body>

            </Modal>
            <Container className='alternativeContainer'>
                <Row>
                    <Col className='col1mob'>
                        <h1 className='title'>Settle endless<br />online disputes</h1>
                        <h2 className='subtitleOrange smallspaceUP'>Convert them to challenges.</h2>
                        <h2 className='subtitleBlue'>Earn Recognition.</h2>
                        <img className="partenersImg" src={parteners} alt="XCROW parteners" />
                        <p className='normalText smallspaceUP'>An easy-to-use, customizable smart-disputes platform built on Polygon <br/>and powered by Chainlink.</p>
                    </Col>
                    <Col lg={5}>
                        <img
                            className="bigImages"
                            src={discussion1}
                            alt="First slide"
                        />
                    </Col>

                </Row>
                <div className='text-center mt-4'>
                <a className="nest-button1 a-none" alt="enter the nest" href="https://discord.gg/aNsphcdsEK" target="_blank" rel="noopener noreferrer">Enter the nest</a> 
                </div>
            </Container>
            <Container className='mt-5 SM'>
                <div className='mt-5 socialMobile'>
                <a href="https://twitter.com/xcrowdisputes" target="_blank" rel="noopener noreferrer"> <img  src={twitterIcon2} alt="socialMedia" className='twitterMobile'></img></a>
  
                <a href="https://www.linkedin.com/company/xcrow/" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} alt="socialMedia" className='linkedinMobile' ></img></a>
                <Container className='lala1'>
                <a href="https://t.me/XcrowDisputes" target="_blank" className='a-none' rel="noopener noreferrer"> <FaTelegram className='telegramMobile' /></a>
                </Container>
        <Container className='lala2'>
                <a href="https://discord.gg/aNsphcdsEK" target="_blank" className='a-none' rel="noopener noreferrer"> <FaDiscord className='discordMobile' /></a>
                </Container>
                </div>
            </Container>
           
        </>
    );

}


export default FirstSection;