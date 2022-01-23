import { Link } from 'react-router-dom';
import React from 'react';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

function Home() {
  return (
  <div className='home'>
    
    <div className="home__header">
      <div className="home__headerLeft">
        <Link to= 'services'>Services</Link> 
        <Link to= 'suppliers'>Suppliers</Link> 

      </div>
      <div className="home__headerRight">
      <Link to= 'about'>About</Link> 
      <Link to= 'team'>Team</Link> 
      <Link to= 'contacts'>Contacts</Link> 
      <AppsIcon />
      <Avatar />
         
      </div>

    </div>
    <div className="home__body">
    <img src="images/GALOOF.png"
     alt="" />
     <div className="home__inputContainer">
      
       <script async src="https://cse.google.com/cse.js?cx=dd80d2e5734f3b0f7"></script>
    <div className="gcse-search"><Search /></div> 
     </div>
    </div>
  </div>
  );
}

export default Home;
