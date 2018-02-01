import React from 'react';
import './form-row-display.css';

export default function FormRowDisplay (props) {
  return (
    <div class='row-display'>
      <p className={props.class}>{props.title}</p>
      <p className={props.class}>{props.value}</p>
    </div>
  );
}

FormRowDisplay.defaultProps = {
  title: '',
  value: ''
};
