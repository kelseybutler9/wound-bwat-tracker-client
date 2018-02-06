import React from 'react';
import {Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import FormRowInput from '../form-row-input/form-row-input';

import './signup-form.css'

export default function SignUp(props) {
  return (
    <form>
      <h1>Welcome to the Wound Care Progression Tool</h1>
      <h2>Sign Up</h2>
      <h3>Enter a valid Username and Password</h3>
      <p>A valid password will have at least 8 characters</p>
      <Field name='username' type='text' label='Username' component={FormRowInput} validate={[required, nonEmpty]} />
      <Field name='password' type='text' label='Password' component={FormRowInput} validate={[required, nonEmpty]} />
      <button type='submit' diabled={this.props.pristine || this.props.submitting}>Sign Up</button>//handle submit and if successful redirect to home page
      <button type='submit' diabled={this.props.pristine || this.props.submitting}>Cancel</button>//redirect to log in screen
    </form>
  );
}

SignUp.defaultProps = {
  title: '',
  value: ''
};
