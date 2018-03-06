import React from 'react';
import {reduxForm, Field} from 'redux-form';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowDisplay from '../form-row-display/form-row-display';
import ClientForm from '../client-form/client-form';
import {required, nonEmpty} from '../../validators';
import {Link} from 'react-router-dom';
import DatePicker from 'react-date-picker';
import connect from 'react-redux';
import {fetchClients, generateScore} from '../../actions';
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

const FormRowCategory = styled.div`
  display: block;
  text-align: center;
  padding: 0;
  margin: 0px 0px 20px 0px;
  color: #5C5C5C;
  font-size:medium;
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

const Question = styled.div`
 background: #F3F3F3;
 display: block;
 padding: 3px;
 margin: 5px -9px -9px -9px;
 text-align: center;
 color: #5C5C5C;
 font-family: Arial, Helvetica, sans-serif;
 font-size: .75em;
`;

export class BWATForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clients: [],
      clientSelected: false,
      clientName: '',
      clientId: '',
      date_of_form: new Date(),
      wound_location: ['Sacrum and Coccyx','Lateral ankle','Trochanter','Medial ankle','Ischial tuberosity','Heel','other'],
      shape: ['Irregular','Linear or elongated','Round/Oval','Bowl/boat','Square/rectangle','Butterfly','Other Shape'],
      question_one: ['1 = Length x width less than 4 sq cm','2 = Length x width 4-16 sq cm', '3 = Length x width 16.1--36 sq cml','4 = Length x width 36.1--80 sq cm','5 = Length x width greater than 80 sq cm'],
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
      question_thirteen: ['1 = 100% wound covered, surface intact','2 = 75% to 100% wound covered &/or epithelial tissue extends >0.5cm into wound bed','3 = 50% to 75% wound covered &/or epithelial tissue extends to  less than 0.5cm into wound bed','4 = 25% to 50% wound covered','5 = less than 25% wound covered'],
      score: 13,
      submitting: false,
      feedback: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const self = this;
    axios.get(`${API_BASE_URL}/clients`)
    .then(function (response) {
      self.setState({clients: response.data});
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onDateChange = date => this.setState({date_of_form: date});

  onChange(e) {
      const self = this;
      const name = e.target.value;
      const nameId = name.split("-");
      console.log(nameId[1]);
      console.log(nameId[0]);
      self.setState(
        { clientId: nameId[1],
          clientSelected: true,
          clientName: nameId[0]
        }
      );
  }

  onSubmit(e) {
    const scores = [];
    Object.keys(e).forEach(function(key) {
      if(key.includes('question')) {
      scores.push(e[key]);
    }});
    console.log(scores);
    this.props.dispatch(generateScore(scores));
    console.log(this.state.score);

    // axios({
    //   method: 'post',
    //   url: `${API_BASE_URL}/forms`,
    //   data: {
    //     client_id: this.state.clientId,
    //     date_of_form: this.state.date_of_form,
    //     wound_location: e[`wound_location`],
    //     shape_of_wound: e[`shape`],
    //     question_one: e[`question_one`],
    //     question_two: e[`question_two`],
    //     question_three: e[`question_three`],
    //     question_four: e[`question_four`],
    //     question_five: e[`question_five`],
    //     question_six: e[`question_six`],
    //     question_seven: e[`question_seven`],
    //     question_eight: e[`question_eight`],
    //     question_nine: e[`question_nine`],
    //     question_ten: e[`question_ten`],
    //     question_eleven: e[`question_eleven`],
    //     question_twelve: e[`question_twelve`],
    //     question_thirteen: e[`question_thirteen`],
    //     score: this.state.score
    //   }
    // }).then(function (response) {
      //   this.setState({
      //   submitting: true
      // })
      // })
  // .catch(function (error) {
  //  console.log(error);
  // })

}


  render () {

    if(!this.state.clientSelected) {
      return(
        <Wrapper>
          <form>
            <Title>BWAT Wound Form</Title>
            <Input>
              <Label>Select an existing client</Label>
              <Field name='client-type' component='select' validate={[required, nonEmpty]} onChange={this.onChange}>
                {this.state.clients.map(client => (
                  <option value={`${client.first_name} ${client.last_name}-${client.id}`} key={client.id} id={client.id}>
                    {client.first_name} {client.last_name}
                  </option>
                  ))}
              </Field>
            </Input>
            <ButtonWrapper>
              <Button><Link to={'/new-client'}>Create New Client</Link></Button>
            </ButtonWrapper>
          </form>
        </Wrapper>
      )
    }

    else if (!this.state.submitting)
    {
      return (
        <Wrapper>
          <form
            onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                  )}>
            <Title>BWAT Wound Form</Title>
            <Title header>Client: {this.state.clientName} </Title>
            <InputWrapper>
              <Input>
                <Label>Date of Form</Label>
                <DatePicker
                   name='date_of_form'
                   onChange={this.onDateChange}
                   value={this.state.date_of_form}
                />
              </Input>
              <FormCategoryRow title='Wound Information' />
              <Input>
                <Label>Wound Location</Label>
                <Field name='wound_location' component='select' validate={[required, nonEmpty]}>
                  {this.state.wound_location.map(choice => (
                    <option key={choice}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Where is the wound located? Anatomic site:</Question>
              </Input>
              <Input>
                <Label>Shape</Label>
                <Field name='shape' component='select' validate={[required, nonEmpty]}>
                  {this.state.shape.map(choice => (
                    <option key={choice}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Overall wound patter; assess by observing perimeter and depth?</Question>
              </Input>
              <FormCategoryRow title='Questions' />
              <Input>
                <Label>Size</Label>
                <Field name='question_one' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_one.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question One</Question>
              </Input>
              <Input>
              <Label>Depth</Label>
                <Field name='question_two' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_two.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Two</Question>
              </Input>
              <Input>
              <Label>Edges</Label>
                <Field name='question_three' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_three.map((choice, index) => (
                    <option key={index} value={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Three</Question>
              </Input>
              <Input>
                <Label>Undermining</Label>
                <Field name='question_four' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_four.map((choice, index) => (
                    <option key={index} value={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Four</Question>
              </Input>
              <Input>
                <Label>Necrotic Tissue Type</Label>
                <Field name='question_five' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_five.map((choice, index) => (
                    <option key={index} value={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Five</Question>
              </Input>
              <Input>
                <Label>Necrotic Tissue Amount</Label>
                <Field name='question_six' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_six.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Six</Question>
              </Input>
              <Input>
                <Label>Exudate Type</Label>
                <Field name='question_seven' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_seven.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Seven</Question>
              </Input>
              <Input>
                <Label>Exudate Amount</Label>
                <Field name='question_eight' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_eight.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Eight</Question>
              </Input>
              <Input>
                <Label>Skin Color Surrounding Wound</Label>
                <Field name='question_nine' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_nine.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Nine</Question>
              </Input>
              <Input>
                <Label>Peripheral Tissue Edema</Label>
                <Field name='question_ten' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_ten.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Ten</Question>
              </Input>
              <Input>
                <Label>Peripheral Tissue Induration</Label>
                <Field name='question_eleven' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_eleven.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Eleven</Question>
              </Input>
              <Input>
                <Label>Granulation Tissue</Label>
                <Field name='question_twelve' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_twelve.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Twelve</Question>
              </Input>
              <Input>
                <Label>Epithelialization</Label>
                <Field name='question_thirteen' component='select' validate={[required, nonEmpty]}>

                  {this.state.question_thirteen.map((choice, index) => (
                    <option key={index} value={index}>
                      {choice}
                    </option>
                  ))}
                </Field>
                <Question>Question Thirteen</Question>
              </Input>
            </InputWrapper>
            <ButtonWrapper>
              <Button type='submit' disabled={this.props.pristine || this.props.submitting}>Create BWAT Form</Button>
            </ButtonWrapper>
          </form>
        </Wrapper>
      );
    }

    return (
      <Wrapper>
        <FormRowDisplay title='Your Form has been successfully added! Your Weekly Score:' value={this.state.score} />
      </Wrapper>
    );
  }
}

export default reduxForm({
  form: 'bwat'
})(BWATForm);
