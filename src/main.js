import "@babel/polyfill";
import 'sanitize.css';
import "./globalStyles.styl";
import React from "react";
import { render } from "react-dom";
import { StyletronProvider } from "app/components/StyletronProvider";

import App from "app";

render((
    <StyletronProvider>
        <App/>
    </StyletronProvider>
), document.getElementById("app"));
