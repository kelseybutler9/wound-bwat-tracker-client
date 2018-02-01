import React from 'react';
import {Field} from 'redux-form';
import {required, nonEmpty} from '../validators';
import FormRowInput from './form-row-input/form-row-input';
import {Link} from 'react-router-dom';
import FormRowDisplay from './form-row-display/form-row-display';
import {reduxForm} from 'redux-form';

import './login-form.css';

export class LogIn extends React.Component {
  onSubmit(values) {
        console.log(values);
  }

  render() {
    return (
      <form>
        onSubmit={this.props.handleSubmit(values =>
                      this.onSubmit(values)
        )}>

        <h1>Welcome to the Wound Care Progression Tool</h1>
        <h2>Log In</h2>
        <Field name='username' type='text' label='Username' component={FormRowInput} validate={[required, nonEmpty]} />
        <Field name='password' type='text' label='Password' component={FormRowInput} validate={[required, nonEmpty]} />
        <button type='submit'><Link to={`/view-all-forms`}>Submit</Link></button>
        <button type='submit'><Link to={`/signup`}>Sign Up</Link></button>
      </form>
    );
  }
}

export default reduxForm({
    form: 'login'
})(LogIn);
