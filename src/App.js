import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Cocktails from './pages/Cocktails';
import Cocktail from './pages/Cocktail';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={() => <Cocktails />} />
          <Route exact path="/:id" render={(props) => <Cocktail {...props} />} />
        </div>
      </Router>
    );
  }
}

export default App;
