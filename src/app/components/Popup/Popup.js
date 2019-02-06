import PropTypes from "prop-types";
import React from "react";

const Popup = React.forwardRef(({ children }, ref) => (
    <div className="Popup" ref={ref}>
        <div className="Popup-controls">
            <div className="Popup-close"></div>
        </div>
        <div className="Popup-content">
            {children}
        </div>
    </div>
));
Popup.displayName = "Popup";
Popup.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
