import React, { Component } from 'react';
import CocktailService from '../services/CocktailService'
import faker from 'faker'


class Cocktails extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      cocktails: [],
      search: ''
    }
  }

  componentDidMount() {
    CocktailService.getCocktails(this, 'cocktails');
  }

  search(cocktails) {
    let filteredCocktails = [];
    let drinks = this.state.cocktails.drinks === undefined ? [] : this.state.cocktails.drinks;
    let search = this.state.search.toUpperCase();
    for (let i = 0; i < drinks.length; i++) {
      let drink = drinks[i];
      if (drink.strDrink.toUpperCase().indexOf(search) > -1) {
        let count = parseInt(Math.random() * 3) + 2;
        let tags = [];
        for (let j = 0; j < count; j++) {
          tags.push(faker.commerce.productName());
        }
        drink.tags = tags;
        filteredCocktails.push(drink);        
      }
    }

    return filteredCocktails;
  }

  render() {
    let filteredCocktails = this.search(this.state.cocktails);
    console.log('cocktails', filteredCocktails);
    
    let cocktails = filteredCocktails.map(function(item, i) {
      let tags = item.tags.map(function(tag, j) {
        return (
          <li key={'tag-' + item.idDrink + '-' + j}>
            {tag}
          </li>
        )
      });

      return (
        <div key={'cocktail-' + item.idDrink} className="card mb-3 cocktail-item box-shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-7">
                {item.strDrink}
                <ul>
                  {tags}
                </ul>
              </div>
              <div className="col-5">
                <img src={item.strDrinkThumb} alt="" className="thumbnail" />
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="container my-4">
        <div className="text-center mb-3">
          <h5 className="">Random drinks 0.1</h5>
        </div>
        {cocktails}
      </div>
    );
  }
}

export default Cocktails;