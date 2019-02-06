import PropTypes from "prop-types";
import React from "react";

import "./Tooltip.styl";

const Tooltip = React.forwardRef(({ addClass, text }, forwardRef) => (
    <div
        className={`Tooltip ${addClass || ""}`}
        ref={forwardRef}
    >
        <p className="Tooltip-text">{text}</p>
    </div>
));
Tooltip.displayName = "Tooltip";
Tooltip.propTypes = {
    addClass: PropTypes.string,
    text: PropTypes.string
};

export default Tooltip;
