import React from 'react'
import { Container } from 'react-bootstrap'
import Tokendist from '../assets/images/TokenDist1.png'
import Crowbackground from '../assets/images/Crowbackground.svg'
import tokenMobile from '../assets/images/tokenMobile1.png'
import FadeInSection from './UI/FadeComp'


export default function Tokendistr() {
  return (
    <>
      <FadeInSection>
      <Container className='space-10'>
        <img src={Crowbackground} alt='token distribution' className='imgback' />
        <h2 className='title'>
          Token distribution <br />& Release schedule
        </h2>
        <div className='mt-4'>
          <img src={Tokendist} className="tokenDist " alt='token distribution' />
          <img src={tokenMobile} className="tokenMobile" alt='token distributionm' />
        </div>
      </Container>
      </FadeInSection>
    </>
  )
}
