import PropTypes from "prop-types";
import React from "react";

import { Icon } from "components/Icon";

import "./Popup.styl";
const Popup = React.forwardRef(({ children, onCloseClick }, ref) => (
    <div className="Popup" ref={ref}>
        <div className="Popup-close" onClick={onCloseClick}>
            <Icon type="close"/>
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
    ]),
    onCloseClick: PropTypes.func
};

export default Popup;
