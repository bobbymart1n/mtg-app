import React from 'react';
import styled from 'styled-components';

const CardHeader = styled.div `
  width: 100%;
  height: 175px;
  overflow: hidden;
  & img {
    width: 100%;
  }
`

const Header = ({ imgLink }) => (
  <CardHeader>
    <img src={imgLink} alt='' />
  </CardHeader>
);

export default Header;
