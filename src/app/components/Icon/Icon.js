import PropTypes from "prop-types";
import React from "react";

import "./Icon.styl";

const Icon = ({ type }) => (
    <span className={`Icon Icon--${type}`}></span>
);
Icon.displayName = "Icon";
Icon.propTypes = {
    type: PropTypes.string
}

export default Icon;
