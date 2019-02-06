import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";
import TransitionGroupPlus from "react-transition-group-plus";

import "./ViewSwitch.styl";
class ViewSwitch extends React.Component {
    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        currentView: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string
        ])
    };
    render() {
        return (
            <div className="ViewSwitch">
                <TransitionGroupPlus>
                    {
                        this.props.children.find(ch => ch.props.viewId === this.props.currentView)
                    }
                </TransitionGroupPlus>
            </div>
        );
    }
};

function mapStateToProps({
    app: {
        currentView
    }
}) {
    return {
        currentView
    };
};

export default connect(mapStateToProps)(ViewSwitch);
