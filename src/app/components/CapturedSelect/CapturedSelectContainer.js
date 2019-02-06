import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import isMobile from "ismobilejs";
import PropTypes from "prop-types";
import React from "react";

import {
    capturedAdd,
    capturedRemove
} from "actions/actions_captured";

import CapturedSelect from "./CapturedSelect";
import WhitSelectDetection from "./WhitSelectDetection";

class CapturedSelectContainer extends React.Component {
    static propTypes = {
        addClass: PropTypes.string,
        capturedAdd: PropTypes.func,
        capturedRemove: PropTypes.func,
        // isSelected provided by WhitSelectDetection
        isSelected: PropTypes.bool,
        pokemon: PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string,
        }).isRequired,
        selected: PropTypes.object,
        showTooltip: PropTypes.bool
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
        this.toggleSelection = this.toggleSelection.bind(this);
    }
    hideTooltip() {
        this.setState({ showTooltip: false });
    }
    showTooltip() {
        this.setState({ showTooltip: true });
    }
    toggleSelection(){
        const isSelected = this.props.isSelected;
        const {
            capturedAdd,
            capturedRemove,
            pokemon
        } = this.props;
        if (!isSelected) {
            capturedAdd((pokemon));
        } else {
            capturedRemove((pokemon));
        }
    }
    render(){
        return (
            <CapturedSelect
                addClass={this.props.addClass}
                onClick={this.toggleSelection}
                onMouseEnter={this.showTooltip}
                onMouseLeave={this.hideTooltip}
                isSelected={this.props.isSelected}
                showTooltip={
                    true &&
                    !isMobile.phone &&
                    !isMobile.tablet &&
                    this.state.showTooltip &&
                    this.props.showTooltip
                }
                toolTipText={
                    !this.props.isSelected
                        ? "Capture Pokemon"
                        : "Release Pokemon"
                }
            />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        capturedAdd,
        capturedRemove
    }, dispatch);
}

function mapStateToProps({
    captured: {
        selected
    }
}) {
    return {
        selected
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WhitSelectDetection(CapturedSelectContainer));
