import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import classes from './SearchBar.css';
import search from '../../assets/resources/search.svg';

import CountryContext from '../../context/country-context';

import Tooltip from '../../components/UI/Tooltip/Tooltip';
import Alert from '../UI/Alert/Alert';

class SearchBar extends Component {
  static contextType = CountryContext;
  
  state = {
    searchValue: '',
    searching: false,
    validQuery: false,
    error: {
      hasError: false,
      errorMessage: ''
    }
  };

  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
  }

  componentDidMount() {
    if (this.searchInputRef.current) {
      const contextSearchValue = this.context.queryValue;
      const isQueryValid = contextSearchValue !== '' && contextSearchValue !== undefined;

      this.searchInputRef.current.focus();
      this.setState({ 
        searchValue: contextSearchValue,
        validQuery: isQueryValid
      });
    }
  }

  searchQueryRequest() {   
    this.setState({searching: true});
    this.context.queryValue = this.state.searchValue;
    
    axios.get(`/sites/${this.context.countryCode}/search?q=${this.state.searchValue}`)
      .then(res => {
        console.log('[SearchBar] response -> Continue', res); 
      })
      .catch(error => {
        this.setState({ 
          error: { 
            hasError: true,
            errorMessage: error
          }
        });
      })
      .finally(() => {
        this.setState({searching: false});
        console.log('[SearchBar] finally', this.context.queryValue); 
      });
  }

  searchHandler(event) { 
    if ((event === 'Enter' && this.state.validQuery) || (event === 'click'))
      this.searchQueryRequest();
    else
      return;
  }

  inputChangeHandler(e) {
    const queryValue = e.target.value;
    const isQueryValid = queryValue !== '' && queryValue !== undefined;

    this.setState({ 
      searchValue: queryValue,
      validQuery: isQueryValid,
    }); 
  }

  errorClickHandler() {
    this.setState({
      error: {
        hasError: false
      }
    });
  }

  render() {
    const height = this.props.height === undefined ? '30px' : this.props.height;
    const width = this.props.width === undefined ? '350px' : this.props.width;
    const fontSize = this.props.fontSize === undefined ? '14px' : this.props.fontSize;

    const containerStyles = {
      height: height,
      width: width
    };

    const errorElement = (
      <Alert 
        alertType="error"
        onClick={ this.errorClickHandler }>
        ¡Upss, un error inesperado! Intenta verificar tu conexión a internet.
        { this.state.error.errorMessage }
      </Alert>
    );
    const loadingElement = (<p>Cargando cosas maravillosas... ¡Danos un tantito!</p>);
    const searchBarElement = (
      <div 
        className={classes.SearchBar} 
        style={containerStyles}>

        <Tooltip 
          width="100%"
          label="Jumm... ¿Qué se me antojará hoy?"
          show={!this.state.validQuery}>  
          <input 
            type="text"
            placeholder="Busca productos, marcas y más..." 
            style={{ fontSize: fontSize }}
            ref={this.searchInputRef}
            value={this.state.searchValue}
            disabled={ this.state.searching }
            onChange={(e) => this.inputChangeHandler(e) }
            onKeyPress={(e) => this.searchHandler(e.key) } />
        </Tooltip>
        
        <Tooltip 
          width="10%"
          label="¡Primero, escribe que deseas comprar!"
          show={!this.state.validQuery}>
          <input 
            type="image"
            src={search} 
            alt="Buscar"
            disabled={!this.state.validQuery || this.state.searching }
            onClick={(e) => this.searchHandler(e.type) } />
        </Tooltip>
      </div>
    );

    return (
      <div>
        { this.state.error.hasError ? errorElement : null }
        { searchBarElement }
        { this.state.searching ? loadingElement : null }
      </div>
    );
  }
}

export default SearchBar;
