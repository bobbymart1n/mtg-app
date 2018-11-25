import styled from 'styled-components';
import Header from './Header';
import Body from './Body';

const Card = styled.div `
  width: 330px;
  height: 350px;
  overflow: hidden;
  box-shadow: 0 0 2px 0 rgba(46,62,72,.12), 0 2px 4px 0 rgba(46,62,72,.12);
  box-sizing: border-box;
  border-radius: 10px;
`

Card.Header = Header;
Card.Body = Body;

export default Card;
