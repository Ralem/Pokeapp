import PropTypes from "prop-types";
import React from "react";

import { Icon } from "components/Icon";

import "./CapturedSelect.styl";

const CapturedSelect = ({ onClick, selected }) => (
    <div
        className={`CapturedSelect ${selected ? "CapturedSelect--selected" : ""}`}
        onClick={onClick}
    >
        <Icon
            type="ball"
        />
    </div>
);
CapturedSelect.displayName = "CapturedSelect";
CapturedSelect.propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool
}

export default CapturedSelect;
