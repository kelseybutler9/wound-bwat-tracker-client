import React from 'react';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowDisplay from '../form-row-display/form-row-display';
import FormRowInput from '../form-row-input/form-row-input';
import BWATPreview from '../bwat-preview/bwat-preview';
import TopNav from '../top-nav/top-nav';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import connect from 'react-redux';
import {fetchClients, fetchClient, fetchForms} from '../../actions';

import './view-all-forms.css'

export class ViewAllForms extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clients: [{id: 1, clientId: 1, firstName: 'first', lastName: 'last', hospitalName: 'Matilda', city: 'LA', clientState: 'CA', startDate: '2017-06-08T19:30:39+00:00', endDate: '2017-06-08T19:30:39+00:00', age: 19, weight: 145}],
      forms: [{id: 12, clientId: 1, week: '2017-06-08T19:30:39+00:00', score: 12}, {id: 13, clientId: 2, week: '2017-06-08T19:30:39+00:00', score: 14}],
      clientSelected: false,
      client: {id: 1, clientId: 1, firstName: 'kelsey', lastName: 'last', hospitalName: 'Matilda', city: 'LA', clientState: 'CA', startDate: '2017-06-08T19:30:39+00:00', endDate: '2017-06-08T19:30:39+00:00', age: 19, weight: 145}
    };
    this.onClientClick = this.onClientClick.bind(this);
  }

  componentDidMount() {
    const clientsObj = this.props.dispatch(fetchClients());
    //this.setState({clients: clientsObj});
  }

  onClientClick(e) {
      e.preventDefault();
      this.setState({clientSelected: true})
      // const clientProps = this.props.dispatch(fetchClient(e.target.value));
      // const clientForms = this.props.dispatch(fetchForms(e.target.value));
      // this.setState(
      //   { clientSelected: true,
      //     client: clientProps,
      //     forms: clientForms
      //   }
      // );
  }

    // let updatedForms = this.state.forms.map((formId, index) => {
    //   let updatedForm = formId;
    //   updatedForm.week = updatedForm.week.subString(0,9);
    // });
    //
    // this.setState({forms: updatedForms});

  render () {
    const clientChoices = [];
    this.state.clients.forEach(client =>
        clientChoices.push(`${client.firstName} ${client.lastName}`)
    )

    const BWATForms = this.state.forms.map((formId, index) =>
        <BWATPreview id={formId.id} score={formId.score} week={formId.week} clientId={formId.clientId}/>
      );

    if(!this.state.clientSelected) {
      return (
        <div>
        <TopNav />
        <Field name='client-type' component='FormRowInput' validate={[required, nonEmpty]}>
          <label>Select a Client</label>
          {this.state.clients.map(client => (
            <option value={client.id} key={client.id} onClick={this.onClientClick}>
              {client.firstName} {client.lastName}
              </option>
            ))}
        </Field>
        </div>
      )
    }

    return (
      <div>
      <TopNav />
        <div class='view-client'>
          <h2>Client</h2>
          <FormCategoryRow title='Client Name' />
          <FormRowDisplay className='client' title='First Name' value={this.state.client.firstName} />
          <FormRowDisplay className='client' title='Last Name' value={this.state.client.lastName} />

          <FormCategoryRow title='Client Location' />
          <FormRowDisplay className='client' title='Hospital Name' value={this.state.client.hospitalName} />
          <FormRowDisplay className='client' title='City' value={this.state.client.city} />
          <FormRowDisplay className='client' title='State' value={this.state.client.clientState} />

          <FormCategoryRow title='Time Frame' />
          <FormRowDisplay className='client' title='Start Date' value={this.state.client.startDate} />
          <FormRowDisplay className='client' title='End Date' value={this.state.client.endDate} />

          <FormCategoryRow title='Client Information' />
          <FormRowDisplay className='client' title='Age' value={this.state.client.age} />
          <FormRowDisplay className='client' title='Weight' value={this.state.client.weight} />
        </div>

      <div class="view-forms">
        {BWATForms}
      </div>
    </div>
    );
  }
}

export default reduxForm({
  form: 'client'
})(ViewAllForms);
