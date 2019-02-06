import React from "react";

import AppOverlay from "./AppOverlay";
import { TweenMax, Power3 } from "gsap";

class AppOverlayTransition extends React.Component {
    appOverlayRef = React.createRef();
    componentWillEnter(cb){
        TweenMax.fromTo(this.appOverlayRef.current, 0.2, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            ease: Power3.easeInOut,
            onComplete: cb,
        });
    }
    componentWillLeave(cb) {
        TweenMax.to(this.appOverlayRef.current, 0.2, {
            autoAlpha: 0,
            onComplete: cb
        });
    }
    render() {
        return (<AppOverlay
            ref={this.appOverlayRef}
        />);
    }
};

export default AppOverlayTransition;
