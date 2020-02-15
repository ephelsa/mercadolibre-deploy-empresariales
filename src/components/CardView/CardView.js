import React from 'react';

import classes from './CardView.css';

const cardView = (props) => (
  <div className={classes.CardView}>
    {props.children}
  </div>
);

export default cardView;
