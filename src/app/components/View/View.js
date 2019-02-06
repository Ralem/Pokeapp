import PropTypes from "prop-types";
import React from "react";

import "./View.styl";
const View = React.forwardRef(({ addClass, children }, ref) => (
    <div
        className={`View ${addClass || ""}`}
        ref={ref}
    >
        {children}
    </div>
));
View.displayName = "View";
View.propTypes = {
    addClass: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default View;
