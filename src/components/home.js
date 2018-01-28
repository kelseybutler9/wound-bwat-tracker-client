import TopNav from './top-nav';
import {Link} from 'react-router-dom';
import React from 'react';
import './home.css';

export default function Home(props) {
  return (
    <div className="home-page">//use prop of logged in to show or hide the components below
      <TopNav />//default to not visible
      <h1>Welcome to the Wound Care Progression Tool</h1>
      <Link to={`/login`}>Log In</Link>
      <Link to={`/signup`}>Sign Up</Link>
      <p id="description">`The Wound Care Progression Tool is used for tracking a wounds progress from start to finish. This app allows users to add BWAT forms for a client wound and recieve the BWAT score immediately. The goal of the app is not only to view and add these forms but use the application in a sales setting. The decreasing BWAT score is easily accessible to quickly prove your credibility to future customers.`</p>
    </div>
  );
}
