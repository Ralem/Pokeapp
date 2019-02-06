import PropTypes from "prop-types";
import React from "react";
import { TweenMax } from "gsap";

class PopupTransition extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])
    };
    popupRef = React.createRef();
    componentWillEnter(cb){
    }
}
