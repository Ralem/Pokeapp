import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import { infoCurrentSet } from "actions/actions_info";

import PokemonDisplay from "./PokemonDisplay";

class PokemonDisplayContainer extends React.Component {
    static propTypes = {
        infoCurrentSet: PropTypes.func,
        pokemon: PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string
        })
    };
    render(){
        const {
            infoCurrentSet,
            pokemon
        } = this.props;
        return (
            <PokemonDisplay
                onImgClick={() => infoCurrentSet(pokemon.name)}
                pokemon={pokemon}
            />
        );
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({ infoCurrentSet }, dispatch);
};

export default connect(null, mapDispatchToProps)(PokemonDisplayContainer);
