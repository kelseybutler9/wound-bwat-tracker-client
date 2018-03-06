import React from 'react';
import {Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import {Link} from 'react-router-dom';
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

const Label = styled.label`
  display: block;
  float: left;
  margin-top: -19px;
  background: #FFFFFF;
  height: 14px;
  padding: 2px 5px 2px 5px;
  color: #B9B9B9;
  font-size: 14px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
`;

const Input = styled.li`
  display: block;
  padding: 9px;
  border:1px solid #DDDDDD;
  margin-bottom: 30px;
  border-radius: 3px;
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
   margin: 5px;

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

export class SignUp extends React.Component {
  onSubmit(values) {
        console.log(values);
  }

  render() {
    return (
    <Wrapper>
      <form>
        <Title>Welcome to the Wound Care Progression Tool</Title>
        <Title header>Enter a valid Username and Password</Title>
        <Input>
          <Label>Username</Label>
          <Field name='username' type='text' component='input' validate={[required, nonEmpty]} />
        </Input>
        <Input>
          <Label>Password</Label>
          <Field name='password' type='text' component='input' validate={[required, nonEmpty]} />
        </Input>
        <ButtonWrapper>
        <Button type='submit'><Link to={`/signup`}>Sign Up</Link></Button>
        <Button type='submit'><Link to={`/`}>Home</Link></Button>
        </ButtonWrapper>
      </form>
    </Wrapper>
  );
  }
}

export default reduxForm({
    form: 'signup'
})(SignUp);
