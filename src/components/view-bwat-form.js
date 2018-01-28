import React from 'react';
import FormCategoryRow from './form-category-row';
import FormRowDisplay from './form-row-display';
import TopNav from './top-nav';

export default function ViewBWATForm(props) {

        return (
            <div class="view-bwat">
              <h1>{props.firstName} {props.lastName} BWAT Form - {props.week}</h1>
              <h2>BWAT Wound Form</h2>

              <FormCategoryRow title="Wound Information"/>
              <FormRowDisplay className="question" title="Where is the wound located? Anatomic site" answer={props.values[0]}/>
              <FormRowDisplay className="question" title="Shape: Overall wound patter; assess by observing perimeter and depth." answer={props.values[1]}/>
              <FormRowDisplay className="question" title="1. Size" answer={props.values[2]}/>
              <FormRowDisplay className="question" title="2. Depth" answer={props.values[3]}/>
              <FormRowDisplay className="question" title="3. Edges" answer={props.values[4]}/>
              <FormRowDisplay className="question" title="4. Undermining" answer={props.values[5]}/>
              <FormRowDisplay className="question" title="5. Necrotic Tissue Type" answer={props.values[6]}/>
              <FormRowDisplay className="question" title="6. Necrotic Tissue Amount" answer={props.values[7]}/>
              <FormRowDisplay className="question" title="7. Exudate Type" answer={props.values[8]}/>
              <FormRowDisplay className="question" title="8. Exudate Amount" answer={props.values[9]}/>
              <FormRowDisplay className="question" title="9. Skin Color Surrounding Wound" answer={props.values[10]}/>
              <FormRowDisplay className="question" title="10. Peripheral Tissue Edema" answer={props.values[11]}/>
              <FormRowDisplay className="question" title="11. Peripheral Tissue Induration" answer={props.values[12]}/>
              <FormRowDisplay className="question" title="12. Granulation Tissue" answer={props.values[13]}/>
              <FormRowDisplay className="question" title="13. Epithelialization" answer={props.values[14]}/>

              <FormCategoryRow title="Weekly Score"/>
              <FormRowDisplay className="score" title={props.week} answer={props.score}/>

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
