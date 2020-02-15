import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import classes from './HomeLayout.css';

import SearchContext from '../../../context/search-context';

import Aux from '../../../hoc/Aux';
import Logo from '../../../components/Logo/Logo';
import SearchBar from '../../SearchBar/SearchBar';
import Alert from '../../UI/Alert/Alert';
import ResultsLayout from '../ResultsLayout/ResultsLayout';

class HomeLayout extends Component {
  static contextType = SearchContext;

  state = {
    error: {
      hasError: false,
      errorMessage: ''
    }
  };

  componentDidMount() {

  }

  errorClickHandler() {
    this.setState({
      error: {
        hasError: false
      }
    });
  }

  render() {
    const errorElement = (
      <Alert 
        alertType="error"
        onClick={ this.errorClickHandler }>
        ¡Upss, un error inesperado! Intenta verificar tu conexión a internet.
        { this.state.error.errorMessage }
      </Alert>
    );

    return (
      <Aux>
        <header>
          <Logo />
        </header>
        <div className={classes.Main}>
          <h1>Presentado por: Leonardo Andrés Pérez Castilla</h1>
        </div>
        <main className={classes.HomeLayout}>
         { this.state.error.hasError ? errorElement : null }  
          <SearchBar 
            height={'50px'} 
            width={'100%'} 
            fontSize={'24px'}
            {...this.props} />
        </main>
        <Route path="/results/:name/:page" exact component={ResultsLayout} />
      </Aux>
    );
  }
}

export default HomeLayout;
