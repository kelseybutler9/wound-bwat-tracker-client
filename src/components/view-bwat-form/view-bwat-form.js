import React from 'react';
import FormCategoryRow from '../form-category-row/form-category-row';
import FormRowDisplay from '../form-row-display/form-row-display';
import TopNav from '../top-nav/top-nav';

import './view-bwat-form.css'

export default function ViewBWATForm (props) {
  const values= [1,2,3];

  return (

    <div class='view-bwat'>
    <TopNav />
      <h1>{this.props.firstName} {this.props.lastName} BWAT Form - {this.props.week}</h1>
      <h2>BWAT Wound Form</h2>

      <FormCategoryRow title='Wound Information' />
      <FormRowDisplay className='question' title='Where is the wound located? Anatomic site' answer={this.props.values[0]} />
      <FormRowDisplay className='question' title='Shape: Overall wound patter; assess by observing perimeter and depth.' answer={this.props.values[1]} />
      <FormRowDisplay className='question' title='1. Size' answer={this.props.values[2]} />
      <FormRowDisplay className='question' title='2. Depth' answer={this.props.values[3]} />
      <FormRowDisplay className='question' title='3. Edges' answer={this.props.values[4]} />
      <FormRowDisplay className='question' title='4. Undermining' answer={this.props.values[5]} />
      <FormRowDisplay className='question' title='5. Necrotic Tissue Type' answer={this.props.values[6]} />
      <FormRowDisplay className='question' title='6. Necrotic Tissue Amount' answer={this.props.values[7]} />
      <FormRowDisplay className='question' title='7. Exudate Type' answer={this.props.values[8]} />
      <FormRowDisplay className='question' title='8. Exudate Amount' answer={this.props.values[9]} />
      <FormRowDisplay className='question' title='9. Skin Color Surrounding Wound' answer={this.props.values[10]} />
      <FormRowDisplay className='question' title='10. Peripheral Tissue Edema' answer={this.props.values[11]} />
      <FormRowDisplay className='question' title='11. Peripheral Tissue Induration' answer={this.props.values[12]} />
      <FormRowDisplay className='question' title='12. Granulation Tissue' answer={this.props.values[13]} />
      <FormRowDisplay className='question' title='13. Epithelialization' answer={this.props.values[14]} />

      <FormCategoryRow title='Weekly Score' />
      <FormRowDisplay className='score' title={this.props.week} answer={this.props.score} />

              //link to home or view all
            </div>
  );
}

ViewBWATForm.defaultProps = {
  firstName: '',
  lastName: '',
  week: '',
  values: [],
  score: ''
};
