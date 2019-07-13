import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './Components/header/Header';
import Sign from './pages/signInUp/Sign';

import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={Sign}/>
        </Switch>
      </Router>
  );
}

export default App;
