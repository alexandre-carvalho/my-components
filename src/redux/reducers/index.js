import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { context } from "./context";

export const reducers = (history) => combineReducers({
    router: connectRouter(history),
    context
})