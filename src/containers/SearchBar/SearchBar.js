import React, { Component } from 'react';

import classes from './SearchBar.css';
import search from '../../assets/resources/search.svg';

import SearchContext from '../../context/search-context';
import Tooltip from '../../components/UI/Tooltip/Tooltip';


class SearchBar extends Component {
  static contextType = SearchContext;
  
  state = {
    searchValue: '',
    validQuery: false,
  };

  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
  }

  componentDidMount() {
    if (this.searchInputRef.current) {
      const contextSearchValue = this.state.searchValue;
      const isQueryValid = contextSearchValue !== '' && contextSearchValue !== undefined;

      this.searchInputRef.current.focus();
      this.setState({ 
        searchValue: contextSearchValue,
        validQuery: isQueryValid
      });
    }
  }

  searchQueryRequest() {   
    this.props.history.push({ pathname: '/results/' + this.state.searchValue + '/1' })
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

  render() {
    const height = this.props.height === undefined ? '30px' : this.props.height;
    const width = this.props.width === undefined ? '350px' : this.props.width;
    const fontSize = this.props.fontSize === undefined ? '14px' : this.props.fontSize;

    const containerStyles = {
      height: height,
      width: width
    };

    //const loadingElement = (<p>Cargando cosas maravillosas... ¡Danos un tantito!</p>);
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
            disabled={!this.state.validQuery }
            onClick={(e) => this.searchHandler(e.type) } />
        </Tooltip>
      </div>
    );

    return (
      <div>
        { searchBarElement }
      </div>
    );
  }
}

export default SearchBar;
