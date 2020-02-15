import React, { Component } from 'react';

import classes from './SearchBar.css';
import search from '../../assets/resources/search.svg';

class SearchBar extends Component {
  state = {
    searchValue: ''
  };

  constructor(props) {
    super(props);
    this.searchInputRef = React.createRef();
  }

  componentDidMount() {
    this.searchInputRef.current.focus();
  }

  searchQueryRequest() {
    console.log('[SearchBar] request', this.state.searchValue);
  }

  searchHandler(event) { 
    if (event === 'Enter')
      this.searchQueryRequest();
    else if (event === 'click')
      this.searchQueryRequest();
    else 
      return
  }

  inputChangeHandler(e) {
      this.setState({ searchValue: e.target.value });
  }

  render() {
    const height = this.props.height === undefined ? '30px' : this.props.height;
    const width = this.props.width === undefined ? '350px' : this.props.width;
    const fontSize = this.props.fontSize === undefined ? '14px' : this.props.fontSize;

    const containerStyles = {
      height: height,
      width: width
    };

    return (
      <div 
        className={classes.SearchBar} 
        style={containerStyles}>
        <input 
          placeholder="Busca productos, marcas y más..." 
          style={{ fontSize: fontSize }}
          ref={this.searchInputRef}
          onChange={(e) => this.inputChangeHandler(e) }
          onKeyPress={(e) => this.searchHandler(e.key) } />
        <img 
          src={search} 
          alt="Buscar" 
          onClick={(e) => this.searchHandler(e.type) } />
      </div>
    );
  }
}

export default SearchBar;
