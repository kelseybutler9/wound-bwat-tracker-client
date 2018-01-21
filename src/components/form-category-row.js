import React from 'react';
import './form-category-row.css';

export default function FormCategoryRow(props) {
      return (
          <h3 className="form-category-row">
            {props.title}
          </h3>
      );
};

FormCategoryRow.defaultProps = {
  title: ''
};
