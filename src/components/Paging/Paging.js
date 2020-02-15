import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './Paging.css';


class Paging extends Component {

  render() {
    const totalOfPages = Math.ceil(this.props.paging.total / this.props.paging.limit);
    const pagesView = [];
    for (let index = 1; index <= totalOfPages; index++) {
      const activeClass = this.props.active === index ? classes.Active : '';

      pagesView.push(
        <li key={index}
          className={activeClass}>
          <Link to={{pathname: index}}>{index}</Link>
        </li>
      );  
    }
  
    return (
      <div className={classes.Paging}>
        <ul>
          {pagesView}
        </ul>
      </div>
    );
  }
}

Paging.propTypes = {
  active: PropTypes.number.isRequired
}

export default Paging;
