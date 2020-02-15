import React from 'react';

const searchContext = React.createContext({
  country: {
    countryCode: 'MCO',
    countryName: 'Colombia',
  }
});

export default searchContext;
