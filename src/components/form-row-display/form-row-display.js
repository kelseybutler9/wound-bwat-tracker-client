import React from 'react';
import './form-row-display.css';

export default function FormRowDisplay (props) {
  
  return (
    <div className='row-display'>
      <p className={props.className}>{props.title}</p>
      <p className={props.className}>{props.value}</p>
    </div>
  );
}

FormRowDisplay.defaultProps = {
  title: '',
  value: ''
};
