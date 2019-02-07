import PropTypes from "prop-types";
import React from "react";

import "./Box.styl";
const Box = ({ children }) => (
    <div className="Box">
        {children}
    </div>
);
Box.displayName = "Box";
Box.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf([PropTypes.node]),
        PropTypes.node
    ])
};

export default Box;
