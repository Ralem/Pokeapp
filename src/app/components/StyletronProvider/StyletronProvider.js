import React from "react";
import PropTypes from "prop-types";
import { Provider } from "styletron-react";
import { Client as StyletronAtomicEngine } from "styletron-engine-atomic";

const engine = new StyletronAtomicEngine();

const StyletronProvider = ({ children }, ref) => (
    <Provider value={engine}>
        {children}
    </Provider>
);

StyletronProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default StyletronProvider;
