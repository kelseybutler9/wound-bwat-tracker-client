import React from 'react';
import styled, {css} from 'styled-components';

const Title = styled.h3`
  display: block;
  text-align: center;
  padding: 0;
  margin: 0px 0px 20px 0px;
  color: #5C5C5C;
  font-size: large;
`;

export default function FormCategoryRow (props) {
  return (
    <Title className='form-category-row'>
      {props.title}
    </Title>
  );
}

FormCategoryRow.defaultProps = {
  title: ''
};
