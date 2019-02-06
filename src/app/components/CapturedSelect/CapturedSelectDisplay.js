import { connect } from "react-redux";
import isMobile from "ismobilejs";
import PropTypes from "prop-types";
import React from "react";

import CapturedSelect from "./CapturedSelect";
import WhitSelectDetection from "./WhitSelectDetection";

class CapturedSelectDisplay extends React.Component {
    static propTypes = {
        addClass: PropTypes.string,
        // isSelected provided by WhitSelectDetection
        isSelected: PropTypes.bool,
        selected: PropTypes.array,
        showTooltip: PropTypes.string
    };
    static defaultProps = {
        showTooltip: true
    };
    state = {
        showTooltip: false
    };
    constructor() {
        super();
        this.hideTooltip = this.hideTooltip.bind(this);
        this.showTooltip = this.showTooltip.bind(this);
    }
    hideTooltip() {
        this.setState({ showTooltip: false });
    }
    showTooltip() {
        this.setState({ showTooltip: true });
    }
    render() {
        return (<CapturedSelect
            addClass={this.props.addClass}
            onMouseEnter={this.showTooltip}
            onMouseLeave={this.hideTooltip}
            selected={this.props.isSelected}
            showTooltip={
                !isMobile.phone &&
                !isMobile.tablet &&
                this.props.showTooltip &&
                this.state.showTooltip
            }
            toolTipText={
                this.props.isSelected
                    ? "Captured"
                    : "Not Captured"
            }
        />);
    }
}

function mapStateToProps({
    captured: {
        selected
    }
}){
    return {
        selected
    };
}

export default connect(mapStateToProps)(WhitSelectDetection(CapturedSelectDisplay));
