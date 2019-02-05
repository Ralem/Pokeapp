import PropTypes from "prop-types";
import React from "react";

import "./PokeTypeBadge.styl";

const PokeTypeBadge = ({ type }) => (
    <span className={`PokeTypeBadge PokeTypeBadge--${type}`}>
        <span className="PokeTypeBadge-wrapper">
            <span className="PokeTypeBadge-name">{type}</span>
        </span>
    </span>
);
PokeTypeBadge.displayName = "PokeTypeBadge";
PokeTypeBadge.propTypes = {
    type: PropTypes.string
};

export default PokeTypeBadge;
