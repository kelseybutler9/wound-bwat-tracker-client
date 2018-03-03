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
      id: '',
      firstName: 'Kelsey',
      lastName: '',
      hospitalName: '',
      city: '',
      clientState: '',
      startDate: new Date(),
      endDate: new Date(),
      age: '',
      weight: '',
      feedback: '',
      complete: false,
      error: false,
    };

  this.onSubmit = this.onSubmit.bind(this);
 }

  onSubmit (e) {

    //axios({
    //   method: 'post',
    //   url: `${API_BASE_URL}/clients`,
    //   data: {
        // firstName: e[`firstName`],
        // lastName: '',
        // hospitalName: '',
        // city: '',
        // clientState: '',
        // startDate: new Date(),
        // endDate: new Date(),
        // age: '',
        // weight: ''
    //   }
    // }).then(function (response) {
  //   this.setState({
  //   feedback: 'Client successfully created',
  //   complete: true,
  //   error: false
  // })
  // })
  // .catch(function (error) {
  //   this.setState({
  //   feedback: error,
  //   complete: false,
  //   error: true
  // })
  // });

    this.setState({
      feedback: 'Client successfully created',
      complete: true,
      error: false
    })
  }

  onStartChange = date => this.setState({startDate: date});
  onEndChange = date => this.setState({endDate: date});

  render () {

      let successMessage;
       if (this.state.complete) {
           successMessage = (
             <div>
               <p>{this.feedback}</p>
               <button><Link to={'/new-form'} clientId={this.id}>Create a BWAT Form for {this.firstName}</Link></button>
             </div>
           );
       }

       let errorMessage;
       if (this.state.error) {
           errorMessage = (
             <div>
               <p>{this.feedback}</p>
             </div>
           );
       }

    return (
      <div className="client-form">
        <TopNav />
        <form onSubmit={this.onSubmit} >
          <h2>New Client</h2>
          {errorMessage}
          {successMessage}
          <FormCategoryRow title='Client Name' />
          <label>First Name</label>
          <Field name='firstName' type='text' component='input' validate={[required, nonEmpty]} />
          <label>Last Name</label>
          <Field name='lastName' type='text' component= 'input' validate={[required, nonEmpty]} />
          <FormCategoryRow title='Client Location' />
          <label>Hospital Name</label>
          <Field name='hopsitalName' type='text' component= 'input' validate={[required, nonEmpty]} />
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

export default reduxForm({
  form: 'client'
})(ClientForm);
