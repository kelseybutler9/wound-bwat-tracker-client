import React from 'react';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowDisplay from '../form-row-display/form-row-display';
import {Link} from 'react-router-dom';
import {API_BASE_URL} from '../../config.js';
import axios from 'axios';
import {reduxForm, Field} from 'redux-form';
import connect from 'react-redux';
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

export class ViewBWATForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      questionChoices: {
        question_one: [`1 = Length x width less than 4 sq cm`,`2 = Length x width 4-16 sq cm`, `3 = Length x width 16.1--36 sq cml`,`4 = Length x width 36.1--80 sq cm`,`5 = Length x width greater than 80 sq cm`],
        question_two: ['1 = Non-blanchable erythema on intact skin','2 = Length x width 4-16 sq cm','3 = Length x width 16.1--36 sq cml','4 = Length x width 36.1--80 sq cm','5 = Length x width greater than 80 sq cm'],
        question_three: ['1 = Indistinct, diffuse, none clearly visible','2 = Distinct, outline clearly visible, attached, even with wound base','3 = Well-defined, not attached to wound base ','4 = Well-defined, not attached to base, rolled under, thickened ','5 = Well-defined, fibrotic, scarred or hyperkeratotic'],
        question_four: ['1 = None present','2 =Undermining less than 2 cm in any area','3 = Undermining 2-4 cm involving less than 50% wound margins','4 = Undermining 2-4 cm involving greater than 50% wound margins','5 = Undermining greater than 4 cm or Tunneling in any area'],
        question_five: ['1 = None visible ','2 = White/grey non-viable tissue &/or non-adherent yellow slough ','3 = Loosely adherent yellow slough','4 = Adherent, soft, black escha','5 = Firmly adherent, hard, black eschar'],
        question_six: ['1 = None visible','2 = less than 25% of wound bed covered','3 = 25% to 50% of wound covered','4 = 50% to 75% of wound covered','5 = 75% to 100% of wound covered'],
        question_seven: ['1 = None','2 = Bloody','3 = Serosanguineous: thin, watery, pale red/pink','4 = Serous: thin, watery, clear','5 = Purulent: thin or thick, opaque, tan/yellow, with or without odor'],
        question_eight: ['1 = None, dry wound','2 = Scant, wound moist but no observable exudatem','3 = Small','4 = Moderate','5 = Large'],
        question_nine: ['1 = Pink or normal for ethnic group','2 = Bright red &/or blanches to touch','3 = White or grey pallor or hypopigmented','4 = Dark red or purple &/or non-blanchable','5 = Black or hyperpigmente'],
        question_ten: ['1 = No swelling or edema','2 = Non-pitting edema extends less than 4 cm around wound','3 = Non-pitting edema extends greater than or equal to 4 cm around wound','4 = Pitting edema extends less than 4 cm around wound','5 = Crepitus and/or pitting edema extends greater than or equal to 4 cm around wound'],
        question_eleven: ['1 = None present','2 = Induration, less than 2 cm around wound','3 = Induration 2-4 cm extending less than 50% around wound','4 = Induration 2-4 cm extending greater than 50% around wound','5 = Induration > 4 cm in any area around wound'],
        question_twelve: ['1 = Skin intact or partial thickness wound','2 = Bright, beefy red; 75% to 100% of wound filled &/or tissue overgrowth','3 = Bright, beefy red; 75% to 25% of wound filled','4 = Pink, &/or dull, dusky red &/or fills less than 25% of wound','5 = No granulation tissue present'],
        question_thirteen: ['1 = 100% wound covered, surface intact','2 = 75% to 100% wound covered &/or epithelial tissue extends >0.5cm into wound bed','3 = 50% to 75% wound covered &/or epithelial tissue extends to  less than 0.5cm into wound bed','4 = 25% to 50% wound covered','5 = less than 25% wound covered']
      },
      form: {},
      questionValues: [],
      client: {
        id: "5a6541b39293b078f266ae57",
        first_name: "Kelsey",
        last_name: "Butler",
        hospital_name: "Matilda",
        city: "Columbus",
        client_state: "Ohio",
        start_date: "2017-06-08T19:30:39.000Z",
        end_date: "2017-06-08T19:30:39.000Z",
        age: 23,
        weight: 130
      }
    };
  }

  componentDidMount() {
    const self = this;
    const url = window.location.href;
    const formId = url.split('http://localhost:3000/view/');
      axios.get(`${API_BASE_URL}/forms/${formId[1]}`)
      .then(function (response) {
        let date = response.data.date_of_form.split('T');
        response.data.date_of_form = date[0];
        self.setState({form: response.data});
        Object.keys(self.state.form).forEach((key, index) => {
          if(key.includes('question')) {
            self.state.questionValues.push(self.state.form[key]);
          }
        });
        const values = [self.state.form.wound_location, self.state.form.shape_of_wound];
        Object.keys(self.state.questionChoices).forEach((key, index) => {
          const value = self.state.questionValues[index];
          values.push(self.state.questionChoices[key][value]);
        });
        self.setState({questionValues: values});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
  return (

    <Wrapper>
      <Title>{this.state.client.first_name} {this.state.client.last_name} BWAT Form - {this.state.form.date_of_form}</Title>
      <Title header>BWAT Wound Form</Title>

      <FormCategoryRow title='Wound Information' />
      <FormRowDisplay title='Where is the wound located? Anatomic site' value={this.state.questionValues[0]} />
      <FormRowDisplay title='Shape: Overall wound patter; assess by observing perimeter and depth.' value={this.state.questionValues[1]} />
      <FormRowDisplay title='1. Size' value={this.state.questionValues[2]} />
      <FormRowDisplay title='2. Depth' value={this.state.questionValues[3]} />
      <FormRowDisplay title='3. Edges' value={this.state.questionValues[4]} />
      <FormRowDisplay title='4. Undermining' value={this.state.questionValues[5]} />
      <FormRowDisplay title='5. Necrotic Tissue Type' value={this.state.questionValues[6]} />
      <FormRowDisplay title='6. Necrotic Tissue Amount' value={this.state.questionValues[7]} />
      <FormRowDisplay title='7. Exudate Type' value={this.state.questionValues[8]} />
      <FormRowDisplay title='8. Exudate Amount' value={this.state.questionValues[9]} />
      <FormRowDisplay title='9. Skin Color Surrounding Wound' value={this.state.questionValues[10]} />
      <FormRowDisplay title='10. Peripheral Tissue Edema' value={this.state.questionValues[11]} />
      <FormRowDisplay title='11. Peripheral Tissue Induration' value={this.state.questionValues[12]} />
      <FormRowDisplay title='12. Granulation Tissue' value={this.state.questionValues[13]} />
      <FormRowDisplay title='13. Epithelialization' value={this.state.questionValues[14]} />

      <FormCategoryRow title='Weekly Score' />
      <FormRowDisplay title={this.state.form.date_of_form} value={this.state.form.score} />
      <ButtonWrapper>
        <Button><Link to={'/'}>Home</Link></Button>
      </ButtonWrapper>
  </Wrapper>
  );
  }
}

export default reduxForm({
  form: 'bwat'
})(ViewBWATForm);
