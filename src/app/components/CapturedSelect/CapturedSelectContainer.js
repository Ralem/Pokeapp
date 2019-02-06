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

class CapturedSelectContainer extends React.Component {
    static propTypes = {
        addClass: PropTypes.string,
        capturedAdd: PropTypes.func,
        capturedRemove: PropTypes.func,
        pokemon: PropTypes.shape({
            name: PropTypes.string,
        }).isRequired,
        selected: PropTypes.array,
        showTooltip: PropTypes.bool
    };
    static defaultProps = {
        showTooltip: true
    };
    state = {
        isSelected: false,
        showTooltip: false
    };
    static getDerivedStateFromProps({ pokemon, selected }) {
        return {
            isSelected: selected.indexOf(pokemon.name) > -1
        };
    }
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
        const isSelected = this.state.isSelected;
        const {
            capturedAdd,
            capturedRemove,
            pokemon
        } = this.props;
        if (!isSelected) {
            capturedAdd(pokemon.name);
        } else {
            capturedRemove(pokemon.name);
        }
    }
    render(){
        return (
            <CapturedSelect
                addClass={this.props.addClass}
                onClick={this.toggleSelection}
                onMouseEnter={this.showTooltip}
                onMouseLeave={this.hideTooltip}
                selected={this.state.isSelected}
                showTooltip={
                    true &&
                    !isMobile.phone &&
                    !isMobile.tablet &&
                    this.state.showTooltip &&
                    this.props.showTooltip
                }
                toolTipText={
                    !this.state.isSelected
                        ? "Add to captured pokemon"
                        : "Remove captured pokemon"
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

export default connect(mapStateToProps, mapDispatchToProps)(CapturedSelectContainer);
