import React from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import Cards from './../containers/Cards';

const Sets = () => (
  <div>
  <h1>Set Booster Pack Generator</h1>
    <Subscribe to={[Cards]}>
      {sets => (
        <div>
          <button type='button' onClick={() => sets.handleGettingSet('xln')}>Ixalan</button>
          <CardsContainer>
            {sets.state.cards && (
              sets.state.cards.map(({id, name, imageUrl}) =>
                <img src={`${imageUrl}`} alt={name} key={id} />
              )
            )}
          </CardsContainer>
        </div>
      )}
    </Subscribe>
  </div>
)

const CardsContainer = styled.div `
  display: flex;
  flex-flow: row wrap;
  margin: auto;
`

export default Sets
