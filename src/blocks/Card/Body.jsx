import React from 'react';
import styled from 'styled-components';

const CardBody = styled.div `
  padding: 1.3em;
  position: relative;
  height: calc(100% - 217px);
  & h3, p {
    margin: 0;
  }
`
const CardImageContainer = styled.div `
  position: absolute;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  & img {
    width: 100%;
  }
`

const Body = ({ title, date, icon, shopName, cost }) => (
  <CardBody>
    <h3>{title}</h3>
    <p>{shopName}</p>
    <p>{date}</p>
    <p>${cost}</p>
    <CardImageContainer>
      <img src={icon} alt='' />
    </CardImageContainer>
  </CardBody>
);

export default Body;
