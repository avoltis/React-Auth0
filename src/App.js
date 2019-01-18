import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import Nav from './Nav';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </React.Fragment>
    );
  }
}

export default App;
