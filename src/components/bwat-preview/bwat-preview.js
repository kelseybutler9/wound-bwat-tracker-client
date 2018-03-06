import React from 'react';
import {Link} from 'react-router-dom';

export default function BWATPreview (props) {

  return (
    <div className='bwat-preview' id={props.id}>
      <h3 className='week'>{props.week}</h3>
      <p className='score'>{props.score}</p>
      <p className='link-form'><Link to={`/view/${props.id}`}>View BWAT Form</Link></p>
        </div>
  );
}
