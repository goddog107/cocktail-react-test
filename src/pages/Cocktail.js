import React, { Component } from 'react';
import $ from 'jquery'
import Common from '../Common'


class Cocktail extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      id: props.match.params.id
    }
  }
  
  componentDidMount() {
    this.getCocktail();
  }

  getCocktail() {
    $('.loading').show();

    fetch('http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + this.state.id, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        $('.loading').hide();

        let drinks = data.drinks !== null ? data.drinks : [null];
        let cocktail = drinks[0];
        this.setState({
          cocktail: cocktail
        });
        console.log('cocktail', cocktail);
      })
      .catch(error => {
        Common.handleError(error);
      });
  }

  handleBack() {
    this.props.history.push('/');
  }
  
  render() {
    let cocktail = this.state.cocktail;
    if(Common.isNone(cocktail)) {
      return (<div></div>);
    }

    return (
      <div className="container my-4">
        <div className="text-center mb-3">
          <button className="round-button float-left" onClick={this.handleBack.bind(this)}>
            <i className="fa fa-angle-left"></i>
          </button>
          <h5>{cocktail.strDrink}</h5>
        </div>
        <div className="card mt-4">
          <div className="card-body">
            <img src={cocktail.strDrinkThumb} alt="" width='100%' />
            <div className="single-tags-container mt-3">
              <div className="single-tag mb-1" style={{fontWeight: 'bold'}}>
                {cocktail.strAlcoholic} - {cocktail.strCategory}
              </div>
              <div className="single-tag mb-1">
                <span className="badge badge-primary">{cocktail.strIngredient1}</span>
                <span className="badge badge-success ml-1">{cocktail.strIngredient2}</span>
                <span className="badge badge-info ml-1">{cocktail.strIngredient3}</span>
              </div>
              <div className="single-tag">
                {cocktail.strMeasure1} - Bourbon
              </div>
              <div className="single-tag">
                {cocktail.strMeasure2} - Sugar
              </div>
              <div className="single-tag">
                {cocktail.strMeasure1} - Water
              </div>
              <label className="single-tag-label mt-3">
                <i className="fa fa-glass"></i> <b>How to prepare</b>
              </label>
              <div className="single-tag">
                {cocktail.strInstructions}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cocktail;