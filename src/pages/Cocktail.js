import React, { Component } from 'react';

class Cocktail extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      id: props.match.params.id
    }
  }
  
  componentDidMount() {
    console.log('id', this.state.id);
  }
  
  render() {
    return (
      <div>
        Cocktail
      </div>
    );
  }
}

export default Cocktail;