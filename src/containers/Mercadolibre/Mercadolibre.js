import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import HomeLayout from './HomeLayout/HomeLayout';


class Mercadolibre extends Component {
  render() {
    return (
      <Aux>
        <Route path="/" component={HomeLayout} />
      </Aux>
    );
  }
}

export default Mercadolibre;
