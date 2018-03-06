import React from 'react';
import {Link} from 'react-router-dom';
import styled, {css} from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.5em;
`;

const Links = styled.ul`
  list-style:none;
  padding:0;
  margin:0;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
`;

const LinkItem = styled.li`
  text-decoration: none;
  margin: 2%;
  font-size: 1em;
`;


export default function TopNav (props) {
  return (
    <Wrapper>
      <Links>
        <LinkItem>
          <Link to={`/`}>Home</Link>
        </LinkItem>
        <LinkItem>
          <Link to={`/new-client`}>New Client</Link>
        </LinkItem>
        <LinkItem>
          <Link to={`/new-form`}>New BWAT</Link>
        </LinkItem>
        <LinkItem>
          <Link to={`/forms`}>View Forms</Link>
        </LinkItem>
      </Links>
    </Wrapper>
  );
}
