import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Navigation = () => (
  <Nav>
      <LinkList>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/decks'>Decks</Link>
        </li>
        <li>Lorem</li>
        <li>Lorem</li>
      </LinkList>
  </Nav>
);

const Nav = styled.nav `
  height: 80px;
  width: 100%;
  background-color: #222;
  color: white;
  display: flex;
  align-items: center;
`
const LinkList = styled.ul `
  list-style: none;
  margin: 0;
  display: flex;
  & li {
    margin-left: 1em;
    &:first-child {
      margin-left: 0;
    }
  }
`

export default Navigation;
