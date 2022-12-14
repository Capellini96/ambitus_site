import React from 'react'
import { Container } from 'react-bootstrap';
import logowhite from '../assets/images/logowhite.png'
import promoVideo from '../assets/promoVideo1.mp4'
import FadeInSection from './UI/FadeComp';


function FourthSection() {
  return (
    <>
    <FadeInSection>
    <div className='space-10'>
      <Container>
      <div className="container-fluid text-center">
          <video width="80%" controls className='videoSection'>  
            <source src={promoVideo} type="video/mp4"/>
          </video>
        </div>
        </Container>
        </div>
        </FadeInSection>





    </>
  )
}
export default FourthSection;