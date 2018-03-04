import React from 'react';
import {reduxForm, Field} from 'redux-form';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowInput from '../form-row-input/form-row-input';
import {required, nonEmpty} from '../../validators';
import {Link} from 'react-router-dom';
import DatePicker from 'react-date-picker';
import TopNav from '../top-nav/top-nav';
import {API_BASE_URL} from '../../config.js';
import axios from 'axios';

import './client-form.css';

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
             <div className="client-form">
               <TopNav />
             <div>
               <p>{this.feedback}</p>
               <button><Link to={'/new-form'}>Create a BWAT Form for {this.state.firstName}</Link></button>
             </div>
             </div>
           );
       }

       if (this.state.error) {
           return (
             <div className="client-form">
               <TopNav />
               <div>
                 <p>{this.feedback}</p>
                 <button><Link to={'/new-client'}>Create a New Client</Link></button>
               </div>
             </div>
           );
       }
    else {
      return (
        <div className="client-form">
          <TopNav />
          <form onSubmit={this.props.handleSubmit(values =>
                  this.onSubmit(values)
                )} >
            <h2>New Client</h2>
            <FormCategoryRow title='Client Name' />
            <label>First Name</label>
            <Field name='firstName' type='text' component='input' validate={[required, nonEmpty]} />
            <label>Last Name</label>
            <Field name='lastName' type='text' component= 'input' validate={[required, nonEmpty]} />
            <FormCategoryRow title='Client Location' />
            <label>Hospital Name</label>
            <Field name='hospitalName' type='text' component= 'input' validate={[required, nonEmpty]} />
            <label>City</label>
            <Field name='city' type='text' component= 'input' validate={[required, nonEmpty]} />
            <label>State</label>
            <Field name='clientState' type='text' component= 'input' validate={[required, nonEmpty]} />
            <FormCategoryRow title='Time Frame' />
            <label>Start Date</label>
            <DatePicker
               name='startDate'
               onChange={this.onStartChange}
               value={this.state.startDate}
            />
            <label>End Date</label>
            <DatePicker
              name='endDate'
              onChange={this.onEndChange}
              value={this.state.endDate}
            />
            <FormCategoryRow title='Client Information' />
            <label>Age</label>
            <Field name='age' type='text' component= 'input' validate={[required, nonEmpty]} />
            <label>Weight</label>
            <Field name='weight' type='text' label='Weight' component= 'input' validate={[required, nonEmpty]} />
            <button type='submit' disabled={this.props.pristine || this.props.submitting}>Create Client</button>
          </form>
        </div>
      );
    }
  }
}

export default reduxForm({
  form: 'client'
})(ClientForm);
