import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomeLayout from './HomeLayout/HomeLayout';
import Aux from '../../hoc/Aux';

import CardView from '../../components/CardView/CardView';

class Mercadolibre extends Component {
  render() {
    return (
      <Aux>
        <Route path="/" exact render={ (props) => <HomeLayout {...props} /> } />
      </Aux>
    );
  }
}

export default Mercadolibre;
