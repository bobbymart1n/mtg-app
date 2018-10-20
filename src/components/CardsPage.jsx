import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import Cards from './Cards';

class CardsPage extends Component {
  render() {
    return (
      <Subscribe to={[Cards]}>
        {cardsList => (
          <CardsContainer>
            <GetCardsButton
              type="button"
              onClick={cardsList.handleGettingCards}>
              Click me
            </GetCardsButton>
            {cardsList.state.cards && (
              cardsList.state.cards.map(({imageUrl, name, id}) =>
                <Card key={id}>
                  <img src={`${imageUrl}`} alt={`${name}`} />
                </Card>
              )
            )}
          </CardsContainer>
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
  flex: 0 1 100%;
`
const Card = styled.div `
  margin: 0 1em;
  width: auto;
`

export default CardsPage
