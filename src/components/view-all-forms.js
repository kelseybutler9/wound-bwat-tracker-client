import React from 'react';
import FormCategoryRow from './form-category-row';
import FormRowDisplay from './form-row-display';
import FormRowInput from './form-row-input';
import BWATPreview from './bwat-preview';
import TopNav from './top-nav';
import {reduxForm, Field} from 'redux-form';
import {required, nonEmpty} from '../validators';

export class ViewAllForms extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      clients = [{clientId: 1, firstName: "first", lastName: "last", hospitalName: "Matilda", city: "LA", clientState: "CA", startDate: "10/13/2018", endDate: "12/14/2019", age: 19, weight: 145}, {clientId: 2, firstName: "first", lastName: "last", hospitalName: "Matilda", city: "LA", clientState: "CA", startDate: "10/13/2018", endDate: "12/14/2019", age: 32, weight: 150}],
      forms = [{id: 12, clientId: 1, week: "1/2/2018", score: 12}, {id: 13,clientId: 2, week: "2/13/2018", score: 14}]
    }
  }
    render() {
      const clients = this.props.clients.map((client) =>
          const clientName = `${client.firstName} ${client.lastName}`;
          return clientName;
      )

      const BWATForms = this.props.forms.map((formId, index) =>
        <div class="bwat-previews" clientId={formId.clientId}>
          <BWATPreview score={formId.score} week={formId.week}/>
        </div>

      );

        return (
            <div class="view-client">
              <h2>Client</h2>
              <Field name="client" type="text" label="Select the correct client name" component={FormRowInput} validate={[required, nonEmpty]} choices={clients} values={clientIds} />
              //when client name is submitted, use api to set props from client
              <FormCategoryRow title="Client Name"/>
              <FormRowDisplay className="client" title="First Name" answer={this.props.firstName}/>
              <FormRowDisplay className="client" title="Last Name" answer={this.props.lastName}/>

              <FormCategoryRow title="Client Location"/>
              <FormRowDisplay className="client" title="Hospital Name" answer={this.props.hospitalName}/>
              <FormRowDisplay className="client" title="City" answer={this.props.city}/>
              <FormRowDisplay className="client" title="State" answer={this.props.clientState}/>

              <FormCategoryRow title="Time Frame" />
              <FormRowDisplay className="client" title="Start Date" answer={this.props.startDate}/>
              <FormRowDisplay className="client" title="End Date" answer={this.props.endDate}/>

              <FormCategoryRow title="Client Information" />
              <FormRowDisplay className="client" title="Age" answer={this.props.age}/>
              <FormRowDisplay className="client" title="Weight" answer={this.props.weight}/>
            </div>

            <div class="view-forms">
              {BWATForms}
            </div>

            //link to other pages
        );
    }
}

export default reduxForm({
    form: 'client'
})(ViewAllForms);
