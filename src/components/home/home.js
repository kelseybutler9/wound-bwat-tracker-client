import {Link} from 'react-router-dom';
import React from 'react';
import {reduxForm} from 'redux-form';
import styled, {css} from 'styled-components';

const Wrapper = styled.div`
  max-width:400px;
  margin:50px auto;
  background:#fff;
  border-radius:2px;
  border: 2px solid #a9a9a9;
  padding:20px;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const Title = styled.h2`
  display: block;
  text-align: center;
  padding: 0;
  margin: 0px 0px 20px 0px;
  color: #5C5C5C;
  font-size:x-large;

  ${props => props.header && css`
    font-size: large;
    `}
`;

const Button = styled.button`
   background: #FFFFFF;
   border: none;
   padding: 10px 20px 10px 20px;
   border: 1px solid #5C5C5C;
   border-radius: 3px;
   color: #5C5C5C;
   font-family: Georgia, "Times New Roman", Times, serif;
   text-align: center;

   :hover{
      background: #5C5C5C;
      color:#fff;
   }
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <Wrapper>
        <Title>Welcome to the Wound Care Progression Tool</Title>
        <p id='description'>The Wound Care Progression Tool is used for tracking a wounds progress from start to finish. This app allows users to add BWAT forms for a client wound and recieve the BWAT score immediately. The goal of the app is not only to view and add these forms but use the application in a sales setting. The decreasing BWAT score is easily accessible to quickly prove your credibility to future customers.</p>
        <ButtonWrapper>
          <Button><Link to={`/login`}>Log In</Link></Button>
        </ButtonWrapper>
      </Wrapper>
    );
  }
}
export default reduxForm({
  form: 'home'
})(Home);
