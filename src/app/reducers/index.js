import { combineReducers } from "redux";

import app from "./reducer_app";
import captured from "./reducer_captured";

const rootReducer = combineReducers({
    app,
    captured
});

export default rootReducer;
