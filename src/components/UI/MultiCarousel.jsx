import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Medium from "../Medium";
import 'react-multi-carousel/lib/styles.css';
import { Card,Container } from "react-bootstrap";
import interviewImg from "../../assets/images/interview_img.png"

export default class MultiCarousel extends Component {

  render() {
    var settings = {
      dots: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4000,
      pauseOnHover: false
    };


    return (
      <div>
        <div className="text-center mt-5">
        <Card className='card-newsletter2'  style={{height:400, cursor:"pointer"}} onClick={() => window.open("https://www.linkedin.com/posts/thenextbigidea_thenextbigidea-websummit2022-websummit-activity-6993957250088202240-2f0V?utm_source=share&utm_medium=member_desktop")}>     
        <Card.Img variant="top" src={interviewImg} className="img-medium" href="https://www.linkedin.com/posts/thenextbigidea_thenextbigidea-websummit2022-websummit-activity-6993957250088202240-2f0V?utm_source=share&utm_medium=member_desktop"/>
          <Container style={{backgroundImage: interviewImg}}>
          <a href="https://www.linkedin.com/posts/thenextbigidea_thenextbigidea-websummit2022-websummit-activity-6993957250088202240-2f0V?utm_source=share&utm_medium=member_desktop" rel="noopener noreferrer" target='_blank' style={{backgroundImage:interviewImg}}>  </a>
          </Container>
          <Card.Body>
          <Card.Title><a className="medium-title"  rel="noreferrer" target='_blank'>Web Summit Interview</a></Card.Title>
          <Card.Text className="medium-text">
            Dont miss out on what XCROW was up to on Web Summit! An intersting conversation with the The Next Big Idea introducing XCROW 
          </Card.Text>
        </Card.Body>
        </Card>
        
    
     
        </div> 
      
        <Medium />
      </div >
    );
  }
}


