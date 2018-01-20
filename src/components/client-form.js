import React from 'react';
import {reduxForm, Field} from 'redux-form';

export class ClientForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }
    render() {
        return (
            <form
              onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
              )}
            >
              <FormCategoryRow title="Client Name"/>
                <label for="first-name">First Name</label>
                <Field name="first-name" id="first-name" type="text" component="FormRowInput" />
                <label for="last-name">Last Name</label>
                <Field name="last-name" id="last-name" type="text" component="FormRowInput" />

              <FormCategoryRow title="Client Location" />
                <label for="hospital-name">Hospital Name</label>
                <Field name="hopsital-name" id="hospital-name" type="text" component="FormRowInput"/>
                <label for="city">City</label>
                <Field name="city" id="city" type="text" component="FormRowInput" />
                <label for="state">State</label>
                <Field name="state" id="state" type="text" component="FormRowInput" />

              <FormCategoryRow title="Time Frame" />
                <label for="start-date">Start Date</label>
                <Field name="start-date" id="start-date" type="date" component="FormRowInput"/>
                <label for="end-date">End Date</label>
                <Field name="end-date" id="end-date" type="date" component="FormRowInput"/>
              <FormCategoryRow title="Client Information" />
                <label for="age">Age</label>
                <Field name="age" id="age" type="text" component="FormRowInput"/>
                <label for="weight">Weight</label>
                <Field name="weight" id="weight" type="text" component="FormRowInput"/>
                <button type="submit">Update Client</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'client'
})(ClientForm);
