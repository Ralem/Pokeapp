import PropTypes from "prop-types";
import React from "react";

import "./Tab.styl";
const Tab = ({
    addClass,
    children,
    isActive,
    onClick,
    tag: Element
}) => (
    <Element
        className={`Tab ${isActive ? "Tab--active" : ""} ${addClass || ""}`}
        onClick={onClick}
    >
        <span className="Tab-content">
            {children}
        </span>
    </Element>
);
Tab.displayName = "Tab";
Tab.propTypes = {
    addClass: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]),
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
    tag: PropTypes.string
};
Tab.defaultProps = {
    tag: "div"
};

export default Tab;
