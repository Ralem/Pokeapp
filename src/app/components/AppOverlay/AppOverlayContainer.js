import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import TransitionGroupPlus from "react-transition-group-plus";

import AppOverlayTransition from "./AppOverlayTransition";

class AppOverlayContainer extends React.Component {
    static propTypes = {
        showOverlay: PropTypes.bool
    };
    render() {
        return (
            <TransitionGroupPlus>
                { this.props.showOverlay
                    ? <AppOverlayTransition/>
                    : null
                }
            </TransitionGroupPlus>
        );
    }
}

function mapStateToProps({
    app: {
        showOverlay
    }
}) {
    return {
        showOverlay
    };
}

export default connect(mapStateToProps)(AppOverlayContainer);
