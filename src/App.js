import React, { Component } from 'react';
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Notifications from 'react-notify-toast';
import Cocktails from './pages/Cocktails';
import Cocktail from './pages/Cocktail';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Cocktails />} />
          <Route exact path="/:id" render={(props) => <Cocktail {...props} />} />

          <Notifications />
          <div className="loading" style={{ display: 'none' }}>Loading...</div>
        </div>
      </Router>
    );
  }
}

export default App;
