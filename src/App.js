import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import HomeLayout from './components/HomeLayout/HomeLayout';

function App() {
  return (
    <BrowserRouter>
      <div>
        <HomeLayout />
      </div>
    </BrowserRouter>
  );
}

export default App;
