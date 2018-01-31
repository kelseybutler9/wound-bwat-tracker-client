import TopNav from './top-nav';
import {Link} from 'react-router-dom';
import React from 'react';
import {reduxForm} from 'redux-form';
import './home.css';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div className='home-page'>
        <TopNav />
        <h2>Welcome to the Wound Care Progression Tool</h2>
        <form>
          <p id='description'>`The Wound Care Progression Tool is used for tracking a wounds progress from start to finish. This app allows users to add BWAT forms for a client wound and recieve the BWAT score immediately. The goal of the app is not only to view and add these forms but use the application in a sales setting. The decreasing BWAT score is easily accessible to quickly prove your credibility to future customers.`</p>
          <button><Link to={`/login`}>Log In</Link></button>
        </form>
      </div>
    );
  }
}
export default reduxForm({
  form: 'home'
})(Home);
