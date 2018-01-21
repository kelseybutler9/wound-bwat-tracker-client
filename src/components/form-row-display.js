import React from 'react';
import './form-row-display.css';

export function FormRowDisplay(props) {
      return (
        <p className={props.class}>{props.title}</p>
        <p className={props.class}>{props.value}</p>
      );
};

FormRowDisplay.defaultProps = {
    title: '',
    value: ''
};
