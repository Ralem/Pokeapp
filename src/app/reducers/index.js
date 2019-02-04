import { combineReducers } from "redux";

import app from "./reducer_app";
import favorites from "./reducer_favorites";

const rootReducer = combineReducers({
    app,
    favorites
});

export default rootReducer;
