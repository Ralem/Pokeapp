import PropTypes from "prop-types";
import React from "react";
import { TweenMax } from "gsap";

import Popup from "./Popup";

class PopupTransition extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };
    popupRef = React.createRef();
    componentWillEnter(cb){
        TweenMax.fromTo(this.popupRef.current, 0.5, {
            autoAlpha: 0,
            scale: 0,
            x: "-50%",
            y: "-50%",
        }, {
            autoAlpha: 1,
            onComplete: () => cb(),
            scale: 1
        })
    }
    componentWillLeave(cb) {
        TweenMax.to(this.popupRef.current, 0.5, {
            autoAlpha: 0,
            onComplete: () => cb(),
            scale: 0
        })
    }
    render() {
        return (
            <Popup ref={this.popupRef} {...this.props}>
                {this.props.children}
            </Popup>
        );
    }
}

export default PopupTransition;
