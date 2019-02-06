import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import PokeList from "./PokeList";

class PokeListCaptured extends React.Component{
    static propTypes = {
        selected: PropTypes.object
    };
    render() {
        return (
            <PokeList
                pokemon={
                    Object.entries(this.props.selected).sort((a, b) => a[1].id - b[1].id).map(([ name, pokemon ]) => pokemon)
                }
            />
        );
    }
};

function mapStateToProps({
    captured: {
        selected
    }
}){
    return {
        selected
    };
}

export default connect(mapStateToProps)(PokeListCaptured);
