import React, { Component } from 'react';
import CocktailService from '../services/CocktailService'


class Cocktails extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      cocktails: []
    }
  }
  
  componentDidMount() {
    CocktailService.getCocktails(this, 'cocktails');
  }

  render() {
    console.log('cocktails', this.state.cocktails);

    return (
      <div>
        Cocktails
      </div>
    );
  }
}

export default Cocktails;