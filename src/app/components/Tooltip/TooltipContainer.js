import React from "react";

import Tooltip from "./Tooltip";

class TooltipContainer extends React.Component {
    tooltipRef = React.createRef();
    componentWillEnter(cb) {
        TweenMax.fromTo(this.tooltipRef.current, 0.25, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            onComplete: () => cb()
        });
    }
    componentWillLeave(cb){
        TweenMax.to(this.tooltipRef.current, 0.25, {
            autoAlpha: 0,
            onComplete: () => cb()
        });
    }
    render() {
        return (
            <Tooltip
                {...this.props}
                ref={this.tooltipRef}
            />
        )
    }
}

export default TooltipContainer;
