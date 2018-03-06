import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../home/home';
import ViewAllForms from '../view-all-forms/view-all-forms';
import ViewBWATForm from '../view-bwat-form/view-bwat-form';
import BWATForm from '../bwat-form/bwat-form';
import LogIn from '../login-form/login-form';
import SignUp from '../signup-form/signup-form';
import ClientForm from '../client-form/client-form';
import styled, {css} from 'styled-components';
import TopNav from '../top-nav/top-nav';

const Wrapper = styled.div`
  background-image: url('https://image.freepik.com/free-vector/grey-linen-texture-background_1053-253.jpg');
  border-radius:2px;
  padding:20px;
  font-family: Georgia, "Times New Roman", Times, serif;
  background-repeat: repeat;
  color: #5C5C5C;
`;

const Title = styled.h2`
  display: block;
  text-decoration: none;
  text-align: center;
  padding: 0;
  margin: 0px 0px 20px 0px;
  color: #5C5C5C;
  font-size: 2em;
`;

export default function App(props) {
  return (
    <Router>
      <Wrapper>
        <header>
          <Title><Link to='/'>Wound Care BWAT Tracker</Link></Title>
          <TopNav />
        </header>
        <main>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/new-form' component={BWATForm} />
          <Route exact path='/new-client' component={ClientForm} />
          <Route exact path='/forms' component={ViewAllForms} />
          <Route exact path='/view/:id' component={ViewBWATForm} />
        </main>
      </Wrapper>
    </Router>
  );
}
