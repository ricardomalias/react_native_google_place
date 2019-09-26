import {createStore, applyMiddleware, combineReducers, compose} from "redux"
import thunkMiddleware from "redux-thunk"
import mapReducer from "./map/reducers"
import apiMiddleware from "./middleware"

const rootReducer = combineReducers({
    mapReducer,
});

const middlewares = [apiMiddleware, thunkMiddleware];
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, applyMiddleware(...middlewares));
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));
// window.store = store;
export default store;
