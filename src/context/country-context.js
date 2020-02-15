import React from 'react';

const countryContext = React.createContext({
  countryCode: 'MCO',
  countryName: 'Colombia',
  queryValue: 'Motorola G6'
});

export default countryContext;
