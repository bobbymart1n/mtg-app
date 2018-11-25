import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

const Navigation = () => (
  <Nav>
      <LinkList>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <NavLink to='/cards' activeClassName="active">
            <strong>Start a new Event</strong>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to='/sets' activeClassName="active">Sets</NavLink>
        </li> */}
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
  width: 100%;
  display: flex;
  justify-content: space-between;
  & li {
    margin: 0 1em;
    &:first-child {
      margin-left: 0;
    }
    & a {
      text-decoration: none;
      &:visited {
        color: white;
      }
      &.active {
        color: forestgreen;
      }
    }
  }
`

export default Navigation;
