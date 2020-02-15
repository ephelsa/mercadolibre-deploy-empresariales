import React, { Component } from 'react';

import classes from './HomeLayout.css';

import Aux from '../../../hoc/Aux';
import Logo from '../../../components/Logo/Logo';
import SearchBar from '../../SearchBar/SearchBar';

class HomeLayout extends Component {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
      <Aux>
        <header>
          <Logo />
        </header>
        <main className={classes.HomeLayout}>
          <SearchBar 
            height={'50px'} 
            width={'100%'} 
            fontSize={'24px'} />
        </main>
        <footer className={classes.Main}>
          <h1>Presentado por: Leonardo Andrés Pérez Castilla</h1>
        </footer>
      </Aux>
    );
  }
}

export default HomeLayout;
