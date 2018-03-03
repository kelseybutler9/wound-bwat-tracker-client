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
import {API_BASE_URL} from '../../config.js';
import axios from 'axios';

import './view-all-forms.css'

export class ViewAllForms extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clients: [],
      forms: [],
      clientSelected: false,
      clientId: '',
      client: {}
    };
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const self = this;
    if(!self.state.clientSelected) {
      axios.get(`${API_BASE_URL}/clients`)
      .then(function (response) {
        self.setState({clients: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  onChange(e) {
      const self = this;
      const name = e.target.value;
      const nameId = name.split("-");
      const newId = nameId[1];

      axios.get(`${API_BASE_URL}/clients/${newId}`)
      .then(function (response) {
        self.setState({client: response.data});
        console.log(self.state.client);
      })
      .catch(function (error) {
        console.log(error);
      });

      axios.get(`${API_BASE_URL}/forms`)
      .then(function (response) {
        const formsArray = [];
        response.data.forEach(function(form){
          formsArray.push(form);
          // if(form['client_id']===`${newId}`){
          //   formsArray.push(form);
          // }
        });
        self.setState({forms: formsArray});
        console.log(self.state.forms);
      })
      .catch(function (error) {
        console.log(error);
      });

      self.setState({ clientSelected: true});
  }

  render () {

    const BWATForms = this.state.forms.map((formId, index) =>
        <BWATPreview id={formId.id} score={formId.score} week={formId.date_of_form} clientId={formId.client_id} key={formId.id}/>
      );

    if(!this.state.clientSelected) {
      return (
        <div>
        <TopNav />
        <label>Select a Client</label>
        <Field name='client-type' component='select' validate={[required, nonEmpty]} onChange={this.onChange}>
          {this.state.clients.map(client => (
            <option value={`${client.first_name} ${client.last_name}-${client.id}`} key={client.id} id={client.id}>
              {client.first_name} {client.last_name}
            </option>
            ))}
        </Field>
        </div>
      )
    }

    return (
      <div className='client'>
      <TopNav />
        <div className='view-client'>
          <h2>Client</h2>
          <FormCategoryRow title='Client Name' />
          <FormRowDisplay className='client' title='First Name' value={this.state.client.first_name} />
          <FormRowDisplay className='client' title='Last Name' value={this.state.client.last_name} />

          <FormCategoryRow title='Client Location' />
          <FormRowDisplay className='client' title='Hospital Name' value={this.state.client.hospital_name} />
          <FormRowDisplay className='client' title='City' value={this.state.client.city} />
          <FormRowDisplay className='client' title='State' value={this.state.client.client_state} />

          <FormCategoryRow title='Time Frame' />
          <FormRowDisplay className='client' title='Start Date' value={this.state.client.startDate} />
          <FormRowDisplay className='client' title='End Date' value={this.state.client.endDate} />

          <FormCategoryRow title='Client Information' />
          <FormRowDisplay className='client' title='Age' value={this.state.client.age} />
          <FormRowDisplay className='client' title='Weight' value={this.state.client.weight} />
        </div>

      <div className="view-forms">
        {BWATForms}
      </div>
    </div>
    );
  }
}

export default reduxForm({
  form: 'client'
})(ViewAllForms);
