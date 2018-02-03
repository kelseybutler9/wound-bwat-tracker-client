import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../home/home';
import ViewAllForms from '../view-all-forms/view-all-forms';
import ViewBWATForm from '../view-bwat-form/view-bwat-form';
import BWATForm from '../bwat-form/bwat-form';
import LogIn from '../login-form/login-form';
import SignUp from '../signup-form/signup-form';

import './app.css';

export default function App(props) {
  return (
    <Router>
      <div className='app'>
        <header>
          <h1><Link to='/'>Wound Care BWAT Tracker</Link></h1>
        </header>
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/new' component={BWATForm} />
          <Route exact path='/forms' component={ViewAllForms} />
          <Route exact path='/view/:id' component={ViewBWATForm} />
        </main>
      </div>
    </Router>
  );
}
