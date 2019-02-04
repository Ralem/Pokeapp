import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import {
    capturedAdd,
    capturedRemove
} from "actions/actions_captured";

import CapturedSelect from "./CapturedSelect";

class CapturedSelectContainer extends React.Component {
    static propTypes = {
        capturedAdd: PropTypes.func,
        capturedRemove: PropTypes.func,
        pokemon: PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string
        }).isRequired,
        selected: PropTypes.array
    };
    state = {
        isSelected: false
    }
    static getDerivedStateFromProps({ pokemon, selected }) {
        return {
            isSelected: selected.indexOf(pokemon.name) > -1
        };
    }
    constructor() {
        super();
        this.toggleSelection = this.toggleSelection.bind(this);
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
                onClick={this.toggleSelection}
                selected={this.state.isSelected}
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
