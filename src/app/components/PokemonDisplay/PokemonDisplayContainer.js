import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import PokemonDisplay from "./PokemonDisplay";

class PokemonDisplayContainer extends React.Component {
    static propTypes = {
        pokemon: PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string
        })
    };
    render(){
        return (
            <PokemonDisplay
                pokemon={this.props.pokemon}
            />
        );
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({}, dispatch);
};

export default connect(null, mapDispatchToProps)(PokemonDisplayContainer);
