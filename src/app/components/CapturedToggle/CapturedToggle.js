import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import { appShowCapturedSet } from "actions/actions_app";

class CapturedToogle extends React.Component {
    static propTypes = {
        appShowCapturedSet: PropTypes.func,
        showCaptured: PropTypes.bool
    };
    constructor(){
        super();
        this.toggleCaptured = this.toggleCaptured.bind(this);
    }
    toggleCaptured(){
        const {
            appShowCapturedSet,
            showCaptured
        } = this.props;
        appShowCapturedSet(!showCaptured);
    }
    render () {
        return (
            <h1 onClick={this.toggleCaptured}>Show Captured Only</h1>
        )
    }
}

function mapStateToProps({
    app: {
        showCaptured
    }
}){
    return {
        showCaptured
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ appShowCapturedSet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CapturedToogle);
