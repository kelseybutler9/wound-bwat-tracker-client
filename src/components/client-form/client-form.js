import React from 'react';
import {reduxForm, Field} from 'redux-form';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowInput from '../form-row-input/form-row-input';
import {required, nonEmpty} from '../../validators';
import {Link} from 'react-router-dom';
import DatePicker from 'react-date-picker';
import {API_BASE_URL} from '../../config.js';
import axios from 'axios';
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

const InputWrapper = styled.ul`
  list-style:none;
  padding:0;
  margin:0;
`;

const Label = styled.label`
  display: block;
  float: left;
  margin-top: -19px;
  background: #FFFFFF;
  height: 14px;
  padding: 2px 5px 5px 5px;
  color: #5C5C5C;
  font-size: 1em;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
`;

const Input = styled.li`
  display: block;
  padding: 5px;
  border:1px solid #DDDDDD;
  margin-bottom: 30px;
  border-radius: 3px;
`;

const Question = styled.div`
 background: #F3F3F3;
 display: block;
 padding: 3px;
 margin: 5px -9px -9px -9px;
 text-align: center;
 color: #5C5C5C;
 font-family: Arial, Helvetica, sans-serif;
 font-size: .75em;
`;

export class ClientForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      firstName: '',
      startDate: new Date(),
      endDate: new Date(),
      feedback: '',
      complete: false,
      error: false
    };

  this.onSubmit = this.onSubmit.bind(this);
 }

  onSubmit (e) {
    const self = this;
    axios({
       method: 'post',
       url: `${API_BASE_URL}/clients`,
       data: {
         first_name: e[`firstName`],
         last_name: e[`lastName`],
         hospital_name: e[`hospitalName`],
         city: e[`city`],
         client_state: e[`clientState`],
         start_date: self.state.startDate,
         end_date: self.state.endDate,
         age: e[`age`],
         weight: e[`weight`]
       }
     }).then(function (response) {
     self.setState({
       firstName: response.data.first_name,
       feedback: 'Client successfully created',
       complete: true,
       error: false
     })
   }).catch(function (error) {
     self.setState({
     feedback: error,
     complete: false,
     error: true
   })})
 }

  onStartChange = date => this.setState({startDate: date});
  onEndChange = date => this.setState({endDate: date});

  render () {

       if (this.state.complete) {
           return (
             <Wrapper>
               <div>
                 <Label>{this.feedback}</Label>
                 <Button><Link to={'/new-form'}>Create a BWAT Form for {this.state.firstName}</Link></Button>
               </div>
             </Wrapper>
           );
       }

       if (this.state.error) {
           return (
             <Wrapper>
                 <Label>{this.feedback}</Label>
                 <Button><Link to={'/new-client'}>Create a New Client</Link></Button>
             </Wrapper>
           );
       }
    else {
      return (
        <Wrapper>
          <form onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values)
                )} >
            <Title>New Client</Title>
            <FormCategoryRow title='Client Name' />
            <InputWrapper>
              <Input>
                <Label>First Name</Label>
                <Field name='firstName' type='text' component='input' validate={[required, nonEmpty]} />
              </Input>
              <Input>
                <Label>Last Name</Label>
                <Field name='lastName' type='text' component= 'input' validate={[required, nonEmpty]} />
              </Input>
              <FormCategoryRow title='Client Location' />
              <Input>
                <Label>Hospital Name</Label>
                <Field name='hospitalName' type='text' component= 'input' validate={[required, nonEmpty]} />
              </Input>
              <Input>
                <Label>City</Label>
                <Field name='city' type='text' component= 'input' validate={[required, nonEmpty]} />
              </Input>
              <Input>
                <Label>State</Label>
                <Field name='clientState' type='text' component= 'input' validate={[required, nonEmpty]} />
              </Input>
              <FormCategoryRow title='Time Frame' />
              <Input>
                <Label>Start Date</Label>
                <DatePicker
                   name='startDate'
                   onChange={this.onStartChange}
                   value={this.state.startDate}
                />
              </Input>
              <Input>
                <Label>End Date</Label>
                <DatePicker
                  name='endDate'
                  onChange={this.onEndChange}
                  value={this.state.endDate}
                />
              </Input>
              <FormCategoryRow title='Client Information' />
              <Input>
                <Label>Age</Label>
                <Field name='age' type='text' component= 'input' validate={[required, nonEmpty]} />
              </Input>
              <Input>
                <Label>Weight</Label>
                <Field name='weight' type='text' Label='Weight' component= 'input' validate={[required, nonEmpty]} />
              </Input>
            </InputWrapper>
            <ButtonWrapper>
              <Button type='submit' disabled={this.props.pristine || this.props.submitting}>Create Client</Button>
            </ButtonWrapper>
          </form>
        </Wrapper>
      );
    }
  }
}

export default reduxForm({
  form: 'client'
})(ClientForm);
