import PropTypes from "prop-types";
import React from "react";

import "./Input.styl";
const Input = React.forwardRef(({ addClass, id, onChange, placeholder, type }, ref) => (
    <input
        className={`Input ${addClass || ""}`}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        type={type}
    />
));
Input.displayName = "Input";
Input.propTypes = {
    addClass: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string
};
Input.defaultProps = {
    type: "text"
};

export default Input;
