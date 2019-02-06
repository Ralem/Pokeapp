import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import { appViewCurrentSet } from "actions/actions_app";

import Tab from "./Tab";

class TabContainer extends React.Component {
    static propTypes = {
        appViewCurrentSet: PropTypes.func,
        currentView: PropTypes.string,
        forView: PropTypes.string
    };
    state = {
        isActive: false,
    };
    static getDerivedStateFromProps({ currentView, forView }){
        return {
            isActive: currentView === forView
        }
    }
    selectView(){
        const {
            appViewCurrentSet,
            currentView,
            forView: view
        } = this.props;
        if (view && view !== currentView) appViewCurrentSet(view);
    }
    constructor() {
        super();
        this.selectView = this.selectView.bind(this);
    }
    render() {
        const {
            currentView,
            forView,
            ...restProps
        } = this.props;
        return (
            <Tab
                {...restProps}
                isActive={this.state.isActive}
                onClick={this.selectView}
            />
        );
    }
};

function mapStateToProps({
    app: {
        currentView
    }
}){
    return {
        currentView
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ appViewCurrentSet }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TabContainer);
