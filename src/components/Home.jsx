import React from 'react';
import { Subscribe } from 'unstated';
import styled from 'styled-components';
import EventCard from './EventCard';
import Events from './../containers/Events';
import MTGIcon from './../assets/mtg_icon.png';

const Container = styled.section `
  padding: 30px;
  width: 100%;
  height: 100%;
`

const Home = () => (
  <Container>
    <Subscribe to={[Events]}>
      {event => (
        <div>
          {event.state.events.map(event => (
            <EventCard
              title={event.title}
              date={event.date}
              shopName={event.shopName}
              cost={event.cost}
              icon={MTGIcon} />
          ))}
        </div>
      )}
    </Subscribe>
  </Container>
)

export default Home;
