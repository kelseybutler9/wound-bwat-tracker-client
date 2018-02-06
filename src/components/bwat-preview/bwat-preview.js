import React from 'react';
import './bwat-preview.css';

export default function BWATPreview (props) {
  return (
    <div className='bwat-preview' id={props.id}>
      <h3 className='week'>{props.week}</h3>
      <p className='score'>{props.score}</p>
      <p className='link-form'>View BWAT Form</p>
        </div>
  );
}
