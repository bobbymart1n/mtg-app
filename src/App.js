import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CardsPage from './components/CardsPage';
import Sets from './components/Sets';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/cards' component={CardsPage} />
          <Route path='/sets' component={Sets} />
        </Switch>
      </div>
    );
  }
}

export default App;
