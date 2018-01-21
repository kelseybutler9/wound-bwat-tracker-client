import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';

export function FormRowDisplay(props) {
      return (
        <form>
          <h1><Welcome to the Wound Care Progression Tool></h1>
          <h2>Log In</h2>
          <Field name="username" type="text" label="Username" component={FormRowInput} validate={[required, nonEmpty]} />
          <Field name="password" type="text" label="Password" component={FormRowInput} validate={[required, nonEmpty]} />
          <button type="submit" diabled={this.props.pristine || this.props.submitting}>Submit</button>//handle submit and if successful redirect to home page
          <Link to={`/signup`}>Sign Up</Link>
        </form>
      );
};

FormRowDisplay.defaultProps = {
    title: '',
    value: ''
};
