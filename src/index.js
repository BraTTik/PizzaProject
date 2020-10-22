import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PizzaProvider } from './Contexts/PizzasContext'
import { AppStateProvider } from './Contexts/AppState';


ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <PizzaProvider>
        <App />
      </PizzaProvider>
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

