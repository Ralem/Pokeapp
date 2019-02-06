import React from "react";

import "./AppOverlay.styl";
const AppOverlay = React.forwardRef((props, ref) => (
    <div className="AppOverlay" ref={ref}></div>
));
AppOverlay.displayName = "AppOverlay";
AppOverlay.propTypes = {};

export default AppOverlay;
