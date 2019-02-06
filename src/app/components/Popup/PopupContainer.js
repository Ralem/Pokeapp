import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import TransitionGroupPlus from "react-transition-group-plus";

class PopupContainer extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        showPopup: PropTypes.bool
    }
    render() {
        return (
            <TransitionGroupPlus></TransitionGroupPlus>
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

export default connect(mapStateToProps)(PopupContainer);
