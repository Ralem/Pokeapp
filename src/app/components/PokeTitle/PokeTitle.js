import PropTypes from "prop-types";
import React from "react";

import "./PokeTitle.styl";

const PokeTitle = ({ children }) => (
    <h1 className="PokeTitle">{children}</h1>
);
PokeTitle.displayName = "PokeTitle";
PokeTitle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
};

export default PokeTitle;
