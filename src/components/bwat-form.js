import React from 'react';
import {reduxForm, Field} from 'redux-form';
import FormCategoryRow from './form-category-row';
import FormRowInput from './form-row-input';
import FormRowDisplay from './form-row-display';
import ClientForm from './client-form';
import TopNav from './top-nav';
import {required, nonEmpty} from '../validators';

export class BWATForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }
    //refer to this link for reference https://github.com/Thinkful-Ed/redux-contact-form/blob/master/src/components/contact-form.js
    render() {
      let clients = ["client one", "client two"];
      let clientIds = ["123", "2457"];

        return (
            <form
              onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
              )}>
              <h2>BWAT Wound Form</h2>
              <Field name="client-type" label="Is the client new or existing?" type="text" component={FormRowInput} validate={[required, nonEmpty]} choices={["Existing Client", "New Client"]} values={["Existing", "New"]}/>
              <Field name="client" type="text" label="Select the correct client name" component={FormRowInput} validate={[required, nonEmpty]} choices={clients} values={clientIds} />
              <ClientForm />
              <Field name="date-of-form" type="date" label="Date of Form" component={FormRowInput} validate={[required, nonEmpty]} choices={[]} values={[]} />
              <FormCategoryRow title="Wound Information"/>
              <Field
                  name="wound-location"
                  type="text"
                  label="Where is the wound located? Anatomic site"
                  component={FormRowInput}
                  validate={[required, nonEmpty]}
                  choices={[
                    "Sacrum and Coccyx",
                    "Lateral ankle",
                    "Trochanter",
                    "Medial ankle",
                    "Ischial tuberosity",
                    "Heel",
                    "other"
                  ]}
                  values={[
                    "Sacrum and Coccyx",
                    "Lateral ankle",
                    "Trochanter",
                    "Medial ankle",
                    "Ischial tuberosity",
                    "Heel",
                    "Other Location"
                  ]}/>
              <Field
                    name="shape"
                    type="text"
                    label="Shape: Overall wound patter; assess by observing perimeter and depth."
                    component={FormRowInput}
                    validate={[required, nonEmpty]}
                    choices={[
                      "Irregular",
                      "Linear or elongated",
                      "Round/Oval",
                      "Bowl/boat",
                      "Square/rectangle",
                      "Butterfly",
                      "Other Shape"
                    ]}
                    values={[
                      "Irregular",
                      "Linear or elongated",
                      "Round/Oval",
                      "Bowl/boat",
                      "Square/rectangle",
                      "Butterfly"
                    ]}/>

              <FormCategoryRow title="Questions" />
              <Field
                    name="question-one"
                    type="text"
                    label="1. Size"
                    component={FormRowInput}
                    validate={[required, nonEmpty]}
                    choices={[
                      "1 = Length x width less than 4 sq cm",
                      "2 = Length x width 4-16 sq cm",
                      "3 = Length x width 16.1--36 sq cml",
                      "4 = Length x width 36.1--80 sq cm",
                      "5 = Length x width greater than 80 sq cm"
                    ]}
                    values={[
                      1,
                      2,
                      3,
                      4,
                      5
                    ]}/>
              <Field
                    name="question-two"
                    type="text"
                    label="2. Depth"
                    component={FormRowInput}
                    validate={[required, nonEmpty]}
                    choices={[
                      "1 = Non-blanchable erythema on intact skin",
                      "2 = Length x width 4-16 sq cm",
                      "3 = Length x width 16.1--36 sq cml",
                      "4 = Length x width 36.1--80 sq cm",
                      "5 = Length x width greater than 80 sq cm"
                    ]}
                    values={[
                      1,
                      2,
                      3,
                      4,
                      5
                    ]}/>
              <Field
                    name="question-three"
                    type="text"
                    label="3. Edges"
                    component={FormRowInput}
                    validate={[required, nonEmpty]}
                    choices={[
                      "1 = Indistinct, diffuse, none clearly visible",
                      "2 = Distinct, outline clearly visible, attached, even with wound base",
                      "3 = Well-defined, not attached to wound base ",
                      "4 = Well-defined, not attached to base, rolled under, thickened ",
                      "5 = Well-defined, fibrotic, scarred or hyperkeratotic"
                    ]}
                    values={[
                      1,
                      2,
                      3,
                      4,
                      5
                ]}/>
                <Field
                      name="question-four"
                      type="text"
                      label="4. Undermining"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = None present",
                        "2 =Undermining less than 2 cm in any area",
                        "3 = Undermining 2-4 cm involving less than 50% wound margins",
                        "4 = Undermining 2-4 cm involving greater than 50% wound margins",
                        "5 = Undermining greater than 4 cm or Tunneling in any area"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
                <Field
                      name="question-five"
                      type="text"
                      label="5. Necrotic Tissue Type"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = None visible ",
                        "2 = White/grey non-viable tissue &/or non-adherent yellow slough ",
                        "3 = Loosely adherent yellow slough",
                        "4 = Adherent, soft, black escha",
                        "5 = Firmly adherent, hard, black eschar"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
                <Field
                      name="question-six"
                      type="text"
                      label="6. Necrotic Tissue Amount"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = None visible",
                        "2 = less than 25% of wound bed covered",
                        "3 = 25% to 50% of wound covered",
                        "4 = 50% to 75% of wound covered",
                        "5 = 75% to 100% of wound covered"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
                <Field
                      name="question-seven"
                      type="text"
                      label="7. Exudate Type"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = None",
                        "2 = Bloody",
                        "3 = Serosanguineous: thin, watery, pale red/pink",
                        "4 = Serous: thin, watery, clear",
                        "5 = Purulent: thin or thick, opaque, tan/yellow, with or without odor"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
                <Field
                      name="question-eight"
                      type="text"
                      label="8. Exudate Amount"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = None, dry wound",
                        "2 = Scant, wound moist but no observable exudatem",
                        "3 = Small",
                        "4 = Moderate",
                        "5 = Large"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
                <Field
                      name="question-nine"
                      type="text"
                      label="9. Skin Color Surrounding Wound"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = Pink or normal for ethnic group",
                        "2 = Bright red &/or blanches to touch",
                        "3 = White or grey pallor or hypopigmented",
                        "4 = Dark red or purple &/or non-blanchable",
                        "5 = Black or hyperpigmente"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
                <Field
                      name="question-ten"
                      type="text"
                      label="10. Peripheral Tissue Edema"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = No swelling or edema",
                        "2 = Non-pitting edema extends less than 4 cm around wound",
                        "3 = Non-pitting edema extends greater than or equal to 4 cm around wound",
                        "4 = Pitting edema extends less than 4 cm around wound",
                        "5 = Crepitus and/or pitting edema extends greater than or equal to 4 cm around wound"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
                <Field
                      name="question-eleven"
                      type="text"
                      label="11. Peripheral Tissue Induration"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = None present",
                        "2 = Induration, less than 2 cm around wound",
                        "3 = Induration 2-4 cm extending less than 50% around wound",
                        "4 = Induration 2-4 cm extending greater than 50% around wound",
                        "5 = Induration > 4 cm in any area around wound"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
                <Field
                      name="question-twelve"
                      type="text"
                      label="12. Granulation Tissue"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = Skin intact or partial thickness wound",
                        "2 = Bright, beefy red; 75% to 100% of wound filled &/or tissue overgrowth",
                        "3 = Bright, beefy red; 75% to 25% of wound filled",
                        "4 = Pink, &/or dull, dusky red &/or fills less than 25% of wound",
                        "5 = No granulation tissue present"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
                <Field
                      name="question-thirteen"
                      type="text"
                      label="13. Epithelialization"
                      component={FormRowInput}
                      validate={[required, nonEmpty]}
                      choices={[
                        "1 = 100% wound covered, surface intact",
                        "2 = 75% to 100% wound covered &/or epithelial tissue extends >0.5cm into wound bed",
                        "3 = 50% to 75% wound covered &/or epithelial tissue extends to  less than 0.5cm into wound bed",
                        "4 = 25% to 50% wound covered",
                        "5 = less than 25% wound covered"
                      ]}
                      values={[
                        1,
                        2,
                        3,
                        4,
                        5
                ]}/>
              <FormRowDisplay title="Weekly Score" value={13} />//update to update score on submit
              <button type="submit" diabled={this.props.pristine || this.props.submitting}>Update Client</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'client'
})(ClientForm);
