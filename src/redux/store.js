import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from "history";
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducers'

const sagaMiddleware = createSagaMiddleware()

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers(history),
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
)