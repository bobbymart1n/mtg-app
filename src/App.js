import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Decks from './components/Decks';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/decks' component={Decks} />
        </Switch>
      </div>
    );
  }
}

export default App;
