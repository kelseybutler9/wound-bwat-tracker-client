import React from 'react';
import {reduxForm, Field} from 'redux-form';
import FormCategoryRow from './form-category-row';
import FormRowInput from './form-row-input';
import {required, nonEmpty} from '../validators';

export class ClientForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }
    //refer to this link for reference https://github.com/Thinkful-Ed/redux-contact-form/blob/master/src/components/contact-form.js
    render() {

        return (
            <form
              onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
              )}>
              <h2>BWAT Wound Form</h2>
              <Field name="date-of-form" type="date" label="Date of Form" component={FormRowInput} validate={[required, nonEmpty]} choices=[] values=[] />
              <FormCategoryRow title="Wound Information"/>
              <Field
                  name="wound-location"
                  type="text"
                  label="Where is the wound located? Anatomic site"
                  component={FormRowInput}
                  validate={[required, nonEmpty]}
                  choices=[
                    "Sacrum and Coccyx",
                    "Lateral ankle",
                    "Trochanter",
                    "Medial ankle",
                    "Ischial tuberosity",
                    "Heel",
                    "other"
                  ],
                  values=[
                    "Sacrum and Coccyx",
                    "Lateral ankle",
                    "Trochanter",
                    "Medial ankle",
                    "Ischial tuberosity",
                    "Heel",
                    "Other Location"
                  ]/>
              <Field
                    name="shape"
                    type="text"
                    label="Shape: Overall wound patter; assess by observing perimeter and depth."
                    component={FormRowInput}
                    validate={[required, nonEmpty]}
                    choices=[
                      "Irregular",
                      "Linear or elongated",
                      "Round/Oval",
                      "Bowl/boat",
                      "Square/rectangle",
                      "Butterfly",
                      "Other Shape"
                    ],
                    values=[
                      "Irregular",
                      "Linear or elongated",
                      "Round/Oval",
                      "Bowl/boat",
                      "Square/rectangle",
                      "Butterfly"
                    ]/>

              <FormCategoryRow title="Questions" />
              <Field
                    name="question-one"
                    type="text"
                    label="1. Size"
                    component={FormRowInput}
                    validate={[required, nonEmpty]}
                    choices=[
                      "1 = Length x width less than 4 sq cm",
                      "2 = Length x width 4-16 sq cm",
                      "3 = Length x width 16.1--36 sq cml",
                      "4 = Length x width 36.1--80 sq cm",
                      "5 = Length x width greater than 80 sq cm"
                    ],
                    values=[
                      1,
                      2,
                      3,
                      4,
                      5
                    ]/>
              <Field
                    name="question-two"
                    type="text"
                    label="2. Depth"
                    component={FormRowInput}
                    validate={[required, nonEmpty]}
                    choices=[
                      "1 = Non-blanchable erythema on intact skin",
                      "2 = Length x width 4-16 sq cm",
                      "3 = Length x width 16.1--36 sq cml",
                      "4 = Length x width 36.1--80 sq cm",
                      "5 = Length x width greater than 80 sq cm"
                    ],
                    values=[
                      1,
                      2,
                      3,
                      4,
                      5
                    ]/>
              <Field
                    name="question-three"
                    type="text"
                    label="3. Edges"
                    component={FormRowInput}
                    validate={[required, nonEmpty]}
                    choices=[
                      "1 = Indistinct, diffuse, none clearly visible",
                      "2 = Distinct, outline clearly visible, attached, even with wound base",
                      "3 = Well-defined, not attached to wound base ",
                      "4 = Well-defined, not attached to base, rolled under, thickened ",
                      "5 = Well-defined, fibrotic, scarred or hyperkeratotic"
                    ],
                    values=[
                      1,
                      2,
                      3,
                      4,
                      5
                ]/>
                <Field
                      name="question-four"
                      type="text"
                      label="4. Undermining"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices=[
                        "1 = None present",
                        "2 =Undermining less than 2 cm in any area",
                        "3 = Undermining 2-4 cm involving less than 50% wound margins",
                        "4 = Undermining 2-4 cm involving greater than 50% wound margins",
                        "5 = Undermining greater than 4 cm or Tunneling in any area"
                      ],
                      values=[
                        1,
                        2,
                        3,
                        4,
                        5
                ]/>
                <Field
                      name="question-five"
                      type="text"
                      label="5. Necrotic Tissue Type"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices=[
                        "1 = None visible ",
                        "2 = White/grey non-viable tissue &/or non-adherent yellow slough ",
                        "3 = Loosely adherent yellow slough",
                        "4 = Adherent, soft, black escha",
                        "5 = Firmly adherent, hard, black eschar"
                      ],
                      values=[
                        1,
                        2,
                        3,
                        4,
                        5
                ]/>
              <button type="submit" diabled={this.props.pristine || this.props.submitting}>Update Client</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'client'
})(ClientForm);
