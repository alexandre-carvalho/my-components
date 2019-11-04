/**
 * Arquivo de Rotas
 */
import React from "react";
import { history } from './redux/store';
import { Switch, Route } from "react-router";
import { ConnectedRouter } from 'connected-react-router';

import Login from "./pages/login";
import Home from "./pages/home";

export default () => <ConnectedRouter history={history}>
    <Switch>
        {/* Página Login
        <Route path="/" component={Login} /> */}
        {/* Página Inicial */}
        <Route exact path="/" component={Home} />
    </Switch>
</ConnectedRouter>