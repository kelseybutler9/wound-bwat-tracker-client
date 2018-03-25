import React from 'react';
import styled, {css} from 'styled-components';

const Label = styled.label`
  display: block;
  float: left;
  margin-top: -5px;
  background: #FFFFFF;
  height: 14px;
  padding: 2px 5px 2px 5px;
  color: #B9B9B9;
  font-size: 14px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
`;

const Input = styled.li`
  display: block;
  padding: 9px;
  border:1px solid #DDDDDD;
  margin-bottom: 30px;
  border-radius: 3px;
  height: 50px;
`;

const Value = styled.div`
  height: 10px;
`;

export default function FormRowDisplay(props) {
  return (
    <div>
      <Label>{props.title}</Label>
      <Input><Value></Value>{props.value}</Input>
    </div>
  );
}

FormRowDisplay.defaultProps = {
  title: '',
  value: ''
};
