import { createStore, compose } from "redux";
import Reducers from "reducers";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && process.env !== "prod"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : a => a
    ;
const store = createStore(Reducers, compose(devTools));

export default store;
