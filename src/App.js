import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Mercadolibre from './containers/Mercadolibre/Mercadolibre';

function App() {
  return (
    <BrowserRouter>
        <Mercadolibre />
    </BrowserRouter>
  );
}

export default App;
