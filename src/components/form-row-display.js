import React from 'react';
import './form-row-display.css';

export function FormRowDisplay(props) {
      return (
        <p id={props.title}>
          {props.value}
        </p>
      );
};

FormRowDisplay.defaultProps = {
    title: '',
    value: ''
};
