import React from 'react';

import classes from './HomeLayout.css';

import Aux from '../../hoc/Aux';
import Logo from '../Logo/Logo';
import SearchBar from '../../containers/SearchBar/SearchBar';

const homeLayout = (props) => (
  <Aux>
    {console.log(props)}
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

export default homeLayout;
