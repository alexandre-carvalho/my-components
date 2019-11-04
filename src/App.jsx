/**
 * Componentes globais para uso comum em todas as páginas
 */
import React from 'react';
import { Provider } from "react-redux";
import './assets/reset.css';
import './assets/index.css';
import { store } from './redux/store';

import Header from './components/generic/header';
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