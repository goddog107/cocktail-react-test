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
      <div className="container my-3">
        <div className="text-center">
          <h5 className="">Random drinks 0.1</h5>
        </div>
        <div className="card">
          <div className="card-body">
            Cocktail
          </div>
        </div>
      </div>
    );
  }
}

export default Cocktails;