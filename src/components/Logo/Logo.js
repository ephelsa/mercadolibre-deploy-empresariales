import React from 'react';

import mercadolibreLogo from '../../assets/resources/mercadolibre-logo.png';
import classes from './Logo.css';

const logo = (props) => (
  <img 
    src={mercadolibreLogo} 
    className={classes.Logo} 
    alt="Mercadolibre logo"/>
);

export default logo;
