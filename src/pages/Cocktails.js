import React, { Component } from 'react';
import Common from '../Common'
import faker from 'faker'
import $ from 'jquery'


class Cocktails extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      cocktails: [],
      filteredCocktails: [],
      search: '',
      showSearch: false
    }
  }

  componentDidMount() {
    this.getCocktails();
  }

  getCocktails() {
    $('.loading').show();

    fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        $('.loading').hide();

        let drinks = data.drinks === undefined ? [] : data.drinks;
        for (let i = 0; i < drinks.length; i++) {
          let drink = drinks[i];
          let count = parseInt(Math.random() * 3) + 2;
          let tags = [];
          for (let j = 0; j < count; j++) {
            tags.push(faker.commerce.productName());
          }
          drink.tags = tags;
        }

        this.setState({
          cocktails: drinks,
          filteredCocktails: drinks
        });
        console.log('cocktails', drinks);
      })
      .catch(error => {
        Common.handleError(error);
      });
  }

  handleChange(event) {
    let name = event.target.name;
    let state = this.state;
    state[name] = event.target.value;
    this.setState(state);
    if (name === 'search') {
      this.search(event.target.value);
    }
  }

  toggleSearch() {
    this.setState({
      showSearch: !this.state.showSearch
    });
  }

  search(search) {
    search = search.toUpperCase();
    let filteredCocktails = [];
    let drinks = this.state.cocktails;
    for (let i = 0; i < drinks.length; i++) {
      let drink = drinks[i];
      if (drink.strDrink.toUpperCase().indexOf(search) > -1) {
        filteredCocktails.push(drink); 
      }
    }
    this.setState({
      filteredCocktails: filteredCocktails
    });
  }

  render() {

    let cocktails = this.state.filteredCocktails.map(function(item, i) {
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

    if (cocktails.length === 0) {
      cocktails = (
        <div className="text-center">Find other cocktails...</div>
      )
    }

    return (
      <div className="container my-4">
        <div className="text-center mb-3">
          <button className="search-button float-right" onClick={this.toggleSearch.bind(this)}>
            <i className="fa fa-search"></i>
          </button>
          <div style={{height: 40}}>
            {!this.state.showSearch ?
              <h5 className="">Random drinks 0.1</h5>
              :
              <input className="search-input" placeholder="Search by name"
                name="search" value={this.state.search} onChange={this.handleChange.bind(this)} />
            }
          </div>
        </div>
        {cocktails}
      </div>
    );
  }
}

export default Cocktails;