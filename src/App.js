import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';

import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPage}/>
        </Switch>
      </Router>
  );
}

export default App;
