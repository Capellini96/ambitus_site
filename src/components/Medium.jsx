import React, { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Container, Card, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




export default function Medium() {
 

  const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@xcrow";
  const [profile, setProfile] = useState({
   name:'XCROW',
   profileImage: '',
   profileUrl:''
  })
  const [blog, setBlog] = useState({
   item:[],
   isLoading:true,
   error:null
  })
  const axios = require('axios').default;

  function ToText(node){
    let tag = document.createElement("div");
    tag.innerHTML = node;
    node = tag.innerText;
    return node;
}

  useEffect(()=> {
   axios.get(mediumURL)
   .then(info=>{
    console.log(info)
     const image = info.data.feed.image;
     const link = info.data.feed.link;
     const blogs = info.data.items;
     console.log(blogs)
     const posts = blogs.filter(post =>post.categories.length>0)

     setProfile( p => ({...p, profileUrl:link, profileImage:image}))
     setBlog({item:posts, isLoading:false})

  
   })
   .catch(err => setBlog({error:err.msg}))

  }, [axios])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  }
 
  const haveBlogs = () =>{
    if(blog.item){
      return( 
      <Carousel responsive={responsive} className="space-10">
      {blog.item.map((post, index) => (
        <>  
        {/* <Col> */}
        <Card className='card-newsletter' key={index} style={{height:400, cursor:"pointer"}} onClick={() => window.open(post.link)}>     
        <Card.Img variant="top" src={post.thumbnail} className="img-medium" href={post.link}/>
        
          <Container style={{backgroundImage:`url(${post.thumbnail})`}}>
          <a href={post.link} rel="noopener noreferrer" target='_blank' style={{backgroundImage:`url(${profile.profileImage})`}}>  </a>
          </Container>
          <Card.Body>
          <Card.Title><a className="medium-title" href={post.link} rel="noreferrer" target='_blank'>{post.title}</a></Card.Title>
          <Card.Text className="medium-text">
            {`${ToText(post.description.substring(0, 300))}...`}
          </Card.Text>
        </Card.Body>
        </Card>
        {/* </Col> */}
       
        {/* <br/> */}
        </>
        
      ))}
      </Carousel>
      )
  }
}

    return(
      <>

          {haveBlogs()}
      </>
    );


}
// const haveBlogs = () =>{
//   if(blog.item){
    
//     return blog.item.map((post, index) => (

//       <div key={index}>
//       <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180?text=Image cap" style={{backgroundImage:`url(${post.thumbnail})`}}/>
//         <Container className="img-medium" style={{backgroundImage:`url(${post.thumbnail})`}}>
//           <div className="author Img">
//             <a href={profile.profileUrl} rel="noopener noreferrer" target='_blank' style={{backgroundImage:`url(${profile.profileImage})`}}>  </a>
//           </div>
//         </Container>
//         <div className="card-body">
//           <h5 className="light-text">
//             <a href={post.link} className='postTitle' rel="noreferrer" target='_blank'>{post.title}</a></h5>
//             <p className="light-text">{`${ToText(post.description.substring(0, 500))}...`}</p>

//         </div>
//       </div>
//       </Card>
//     ))
//   }
//