import React from 'react';
import Pizza from './Pizza';
import pizzas from '../pizzas';
import Burger from './Burger';
import Burgers from '../Burgers';
import Boisson from './Boisson';
import boissons from '../boissons';
import Salade from './Salade';
import salades from '../salades';
import Dessert from './Dessert';
import desserts from '../desserts';

import logo from '../logo.svg';
import '../App.css';

class App extends React.Component {

    state = {};

    list = event => {

        const keyArray = Object.keys(Burgers);
        console.log(keyArray);
    }

  render() {
    return (
        <div>
            <Burger details={this.state}/>
            <Burgers details={this.state}/>
            <Boisson details={this.state}/>
            <boissons details={this.state}/>
        </div>
      );

  }

}

export default App;
