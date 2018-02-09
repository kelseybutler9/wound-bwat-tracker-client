import React from 'react';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowDisplay from '../form-row-display/form-row-display';
import TopNav from '../top-nav/top-nav';
import {Link} from 'react-router-dom';

import './view-bwat-form.css'

export default function ViewBWATForm (props) {
  const questionChoices = { question_one: [`1 = Length x width less than 4 sq cm`,`2 = Length x width 4-16 sq cm`, `3 = Length x width 16.1--36 sq cml`,`4 = Length x width 36.1--80 sq cm`,`5 = Length x width greater than 80 sq cm`],
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
                          }

  const questionValues = [];
  questionChoices.forEach((key, index) => {
    let value = props.values[key];
    questionValues.push(key[value]);
  });


  return (

    <div class='view-bwat'>
    <TopNav />
      <h1>{this.props.firstName} {this.props.lastName} BWAT Form - {this.props.week}</h1>
      <h2>BWAT Wound Form</h2>

      <FormCategoryRow title='Wound Information' />
      <FormRowDisplay className='question' title='Where is the wound located? Anatomic site' answer={this.props.questionValues[0]} />
      <FormRowDisplay className='question' title='Shape: Overall wound patter; assess by observing perimeter and depth.' answer={this.props.questionValues[1]} />
      <FormRowDisplay className='question' title='1. Size' answer={this.props.questionValues[2]} />
      <FormRowDisplay className='question' title='2. Depth' answer={this.props.questionValues[3]} />
      <FormRowDisplay className='question' title='3. Edges' answer={this.props.questionValues[4]} />
      <FormRowDisplay className='question' title='4. Undermining' answer={this.props.questionValues[5]} />
      <FormRowDisplay className='question' title='5. Necrotic Tissue Type' answer={this.props.questionValues[6]} />
      <FormRowDisplay className='question' title='6. Necrotic Tissue Amount' answer={this.props.questionValues[7]} />
      <FormRowDisplay className='question' title='7. Exudate Type' answer={this.props.questionValues[8]} />
      <FormRowDisplay className='question' title='8. Exudate Amount' answer={this.props.questionValues[9]} />
      <FormRowDisplay className='question' title='9. Skin Color Surrounding Wound' answer={this.props.questionValues[10]} />
      <FormRowDisplay className='question' title='10. Peripheral Tissue Edema' answer={this.props.questionValues[11]} />
      <FormRowDisplay className='question' title='11. Peripheral Tissue Induration' answer={this.props.questionValues[12]} />
      <FormRowDisplay className='question' title='12. Granulation Tissue' answer={this.props.questionValues[13]} />
      <FormRowDisplay className='question' title='13. Epithelialization' answer={this.props.questionValues[14]} />

      <FormCategoryRow title='Weekly Score' />
      <FormRowDisplay className='score' title={this.props.week} answer={this.props.score} />
      <button><Link to={'/'}>Home</Link></button>
  </div>
  );
}

ViewBWATForm.defaultProps = {
  firstName: '',
  lastName: '',
  week: 10/20/1992,
  values: [1,2,3,3,2,3,4,3,4,2,1,2,0],
  score: 13
};
