import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import Cards from './../containers/Cards';

class CardsPage extends Component {
  render() {
    return (
      <Subscribe to={[Cards]}>
        {cardsList => (
          <div>
          {!cardsList.state.cards && (
            <GetCardsButton
              type="button"
              onClick={cardsList.handleGettingCards}>
              Click me
            </GetCardsButton>
          )}
          <CardsContainer>
            {cardsList.state.cards && (
              cardsList.state.cards.map(({imageUrl, name, id}) =>
                <Card key={id}>
                  <img src={`${imageUrl}`} alt={`${name}`} />
                </Card>
              )
            )}
          </CardsContainer>
          </div>
        )}
      </Subscribe>
    )
  }
}

const CardsContainer = styled.div `
  display: flex;
  flex-flow: row wrap;
  margin: auto;
`
const GetCardsButton = styled.button `
  width: 100%;
  max-width: 120px;
  height: 35px;
  color: white;
  font-size: 1em;
  border: none;
  border-radius: 25px;
  background-color: steelblue;
`
const Card = styled.div `
  margin: 0 1em;
  width: auto;
`

export default CardsPage
