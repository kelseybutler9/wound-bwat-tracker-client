import React from 'react';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowDisplay from '../form-row-display/form-row-display';
import FormRowInput from '../form-row-input/form-row-input';
import BWATPreview from '../bwat-preview/bwat-preview';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../../validators';
import connect from 'react-redux';
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
  padding: 10px;
  border:1px solid #DDDDDD;
  margin-bottom: 30px;
  border-radius: 3px;
`;

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
        let date = response.data.start_date.split('T');
        response.data.start_date = date[0];
        date = response.data.end_date.split('T');
        response.data.end_date = date[0];
        self.setState({client: response.data});
      })
      .catch(function (error) {
        console.log(error);
      });

      axios.get(`${API_BASE_URL}/forms`)
      .then(function (response) {
        const formsArray = [];
        response.data.forEach(function(form){
          if(form['client_id']===`${newId}`){
            let date = form.date_of_form.split('T');
            form.date_of_form = date[0];
            formsArray.push(form);
          }
        });
        self.setState({forms: formsArray});
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
        <Wrapper>
        <Input className="add-client">
          <Label>Select a Client</Label>
          <Field name='client-type' component='select' validate={[required, nonEmpty]} onChange={this.onChange}>
            {this.state.clients.map(client => (
              <option value={`${client.first_name} ${client.last_name}-${client.id}`} key={client.id} id={client.id}>
                {client.first_name} {client.last_name}
              </option>
              ))}
          </Field>
        </Input>
        </Wrapper>
      )
    }

    return (
      <Wrapper>
        <div className='forms'>
          <Title>Client</Title>
          <FormCategoryRow title='Client Name' />
          <FormRowDisplay title='First Name' value={this.state.client.first_name} />
          <FormRowDisplay title='Last Name' value={this.state.client.last_name} />

          <FormCategoryRow title='Client Location' />
          <FormRowDisplay title='Hospital Name' value={this.state.client.hospital_name} />
          <FormRowDisplay title='City' value={this.state.client.city} />
          <FormRowDisplay title='State' value={this.state.client.client_state} />

          <FormCategoryRow title='Time Frame' />
          <FormRowDisplay title='Start Date' value={this.state.client.start_date} />
          <FormRowDisplay title='End Date' value={this.state.client.end_date} />

          <FormCategoryRow title='Client Information' />
          <FormRowDisplay title='Age' value={this.state.client.age} />
          <FormRowDisplay title='Weight' value={this.state.client.weight} />
        </div>
        <FormCategoryRow title='BWAT Forms' />
          {BWATForms}
    </Wrapper>
    );
  }
}

export default reduxForm({
  form: 'client'
})(ViewAllForms);
