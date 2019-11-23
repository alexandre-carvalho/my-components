/**
 * Componentes globais para uso comum em todas as páginas
 */
import React from 'react';
import { Provider } from "react-redux";
import './assets/reset.css';
import './assets/App.css';
import { store } from './redux/store';

import Header from './components/generics/header';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Header dsb/>
        <div className="container-body">
          <Routes />
        </div>
      </div>
    </Provider>
  );
}

export default App;