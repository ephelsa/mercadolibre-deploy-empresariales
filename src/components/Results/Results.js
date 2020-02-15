import React from 'react';

import classes from './Results.css';
import Result from './Result/Result';

const results = (props) => {

  return (
    <div className={classes.Results}>
      {props.results.map(result => {
        return (
          <Result
            key={result['id']} 
            name={result['title']}
            price={result['price']}
            idSeller={result['seller']['id']}
            thumbnail={result['thumbnail']} />
        );
      })}
    </div>
  );
}

export default results;
