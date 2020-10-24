import React from 'react';
import { Home } from './components/Home';
import { Cart } from './components/Cart';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cart" exact>
        <Cart />
      </Route>
    </Switch>
  );
}

export default App;
