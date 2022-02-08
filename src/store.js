import { applyMiddleware, compose, createStore } from "redux";
import { todoreducers } from "./redux/reducers/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const middlewares = []

const store = createStore(
    todoreducers,
    composeEnhancers(
        applyMiddleware(...middlewares)
    )
)

export default store;