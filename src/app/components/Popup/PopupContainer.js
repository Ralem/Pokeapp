import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";
import TransitionGroupPlus from "react-transition-group-plus";

import { appOverlayShowSet, appPopupShowSet } from "actions/actions_app";

import PopupTransition from "./PopupTransition";

function FirstChild(props) {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
}

class PopupContainer extends React.Component {
    static propTypes = {
        appOverlayShowSet: PropTypes.func,
        appPopupShowSet: PropTypes.func,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        showPopup: PropTypes.bool
    }
    closePopup(){
        this.props.appOverlayShowSet(false);
        this.props.appPopupShowSet(false);
    }
    constructor(){
        super();
        this.closePopup = this.closePopup.bind(this);
    }
    render() {
        return (
            <TransitionGroupPlus component={FirstChild}>
                {this.props.showPopup
                    ? (
                        <PopupTransition
                            onCloseClick={this.closePopup}
                        >
                            {this.props.children}
                        </PopupTransition>
                    )
                    : null
                }
            </TransitionGroupPlus>
        );
    }
};

function mapStateToProps({
    app: {
        showPopup
    }
}) {
    return {
        showPopup
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        appOverlayShowSet,
        appPopupShowSet
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);
