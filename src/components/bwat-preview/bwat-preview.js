import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

export default function BWATPreview (props) {
  const Wrapper = styled.div`
    max-width:400px;
    margin:10px auto;
    background:#fff;
    border-radius:2px;
    padding:20px;
    font-family: Georgia, "Times New Roman", Times, serif;
  `;

  const Title = styled.h2`
    display: block;
    text-align: center;
    padding: 0;
    margin: 0px 0px 20px 0px;
    color: #a9a9a9;
    font-size: large;
  `;

  const Button = styled.button`
     background: #FFFFFF;
     border: none;
     padding: 10px 20px 10px 20px;
     border: 1px solid #5C5C5C;
     border-radius: 3px;
     color: #5C5C5C;
     font-family: Georgia, "Times New Roman", Times, serif;
     text-align: center;

     :hover{
        background: #5C5C5C;
        color:#fff;
     }
  `;

  const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Label = styled.label`
    display: block;
    text-align: center;
    margin-top: -19px;
    background: #FFFFFF;
    height: 14px;
    padding: 2px 5px 5px 5px;
    color: #a9a9a9;
    font-size: 1em;
    overflow: hidden;
    font-family: Arial, Helvetica, sans-serif;
  `;

  return (
    <Wrapper id={props.id}>
      <Title>{props.week}</Title>
      <Label>{props.score}</Label>
      <ButtonWrapper>
        <Button><Link to={`/view/${props.id}`}>View BWAT Form</Link></Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
