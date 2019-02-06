import PropTypes from "prop-types";
import React from "react";

import "./TabWrapper.styl";
const TabWrapper = ({ addClass, children }) => (
    <div className={`TabWrapper ${addClass || ""}`}>
        {children}
    </div>
);
TabWrapper.displayName = "TabWrapper";
TabWrapper.propTypes = {
    addClass: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default TabWrapper;
