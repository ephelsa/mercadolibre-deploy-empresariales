import React from 'react';

import classes from './Result.css';

const result = (props) => {  
  return (
    <div className={classes.Result}>
      <div className={classes.Thumbnail}>
        <img src={props.thumbnail} alt="product-thumb" />
      </div>
      <div className={classes.Info}>
        <span className={classes.Name}>{props.name}</span>
        <span className={classes.Price}><strong>Precio: </strong>${props.price} COP</span>
        <span className={classes.Seller}><strong>ID. vendedor: </strong>{props.idSeller}</span>
      </div>
    </div>
  );
};

export default result;
