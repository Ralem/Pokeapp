import PropTypes from "prop-types";
import React from "react";

import "./Button.styl";
const Button = React.forwardRef(({
    children,
    onClick,
    tag: Element,
    type
}, ref) => (
    <Element
        className="Button"
        onClick={onClick}
        ref={ref}
        type={type}
    >
        {children}
    </Element>
));
Button.displayName = "Button";
Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]),
    onClick: PropTypes.func,
    tag: PropTypes.string,
    type: PropTypes.string
};
Button.defaultProps = {
    tag: "button"
};

export default Button;
