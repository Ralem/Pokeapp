import { combineReducers } from "redux";

import app from "./reducer_app";
import captured from "./reducer_captured";
import info from "./reducer_info";

const rootReducer = combineReducers({
    app,
    captured,
    info
});

export default rootReducer;
