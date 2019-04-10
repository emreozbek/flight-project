import { applyMiddleware, combineReducers, createStore } from "redux";
import { routerMiddleware, routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import reducer from "../reducer";
import Saga from "../saga";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();
export const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer,
    form: formReducer
  }),
  applyMiddleware(sagaMiddleware, routerMiddleware(history))
);
sagaMiddleware.run(Saga);
