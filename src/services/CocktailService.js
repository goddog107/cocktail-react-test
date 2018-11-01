import { Component } from 'react';
import Common from '../Common'
import $ from 'jquery'


class CocktailService extends Component {
  
  static getCocktails(instance, first = null, second = null) {
    $('.loading').show();

    fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        Common.handleSuccess(data, instance, first, second);
      })
      .catch(error => {
        Common.handleError(error);
      });
  }
}

export default CocktailService;