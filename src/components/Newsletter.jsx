import React from 'react'
import { Container } from 'react-bootstrap'
import logowithoutname from '../assets/images/logowithoutname.svg'
import MultiCarousel from './UI/MultiCarousel'
import axios from "axios";
import { useState } from 'react';


export default function Newsletter() {
   const APIKEY = process.env.REACT_APP_APIKEY;

   const [newsEmail, setNewsEmail] = useState("")

   const url= "https://api.xcrow.net/notifications/mailchimp/member_add"

    const headers = {
      headers: { "Content-Type": "application/json", "x-api-key": "D4hWWPQo9v5zkj7cINqUX8KFpANqkuYW9ZtTrNXE"},
    };
    const data = [newsEmail];
    

  const onChangeHandler = event => {
    setNewsEmail(event.target.value);
  }

  const onsubmitHandler =  async event => {
    event.preventDefault();
    if (newsEmail === "") {
      return;
    }
    event.target.value = ""
    
    axios.post(url,data,headers)
    .catch((error) => {
      console.log(error);
    });
    
      const thanksText = document.querySelector("#thanks")
      const btn = document.querySelectorAll("#submitButton")
      thanksText.innerText += "Welcome to the nest fellow crow!"
      btn[0].disabled = true
  
      setTimeout(() => {
        thanksText.innerText = ""
        document.querySelector("submitButton")
        btn[0].disabled = false
  
      }, "15000")

    };
    
  
        
   
  return (
    <>
      <div className='news-background mt-5'>
        <Container classname='mt-5'>
          <h3 className='title mt-5 text-center'>Latest News about XCROW</h3>
          <div className='sectorNews'>
            <MultiCarousel />
          </div>
          <Container className="text-center mt-5 bigContainer">
            <img src={logowithoutname} />
            <h3 className='newsSubTitle'>Unlock the freedom to challenge everything
              and put your money where your mouth is</h3>
            <p className='light-text'>Sign up for updates about XCROW and to be notified of our Whitelist.</p>

            <form onSubmit={onsubmitHandler}>
              <input className='emailInput'
                type="email"
                placeholder='Enter your email address'
                onChange={onChangeHandler}
                value={newsEmail}
              />
              <br />
              <button type="submit" id='submitButton' className="formButton"> Subscribe </button>
              <br />
              <p id='thanks' className='thanksText mt-5'></p>
            </form>
          </Container>

        </Container>





      </div>
    </>

  )
}
