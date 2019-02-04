import "@babel/polyfill";
import 'sanitize.css';
import "./globalStyles.styl";
import { Provider } from "react-redux";
import React from "react";
import { render } from "react-dom";

import store from "app/store";

import App from "app";

render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById("app"));
