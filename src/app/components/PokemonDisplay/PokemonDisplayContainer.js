import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import {
    appOverlayShowSet,
    appPopupShowSet
} from "actions/actions_app";
import { infoCurrentSet } from "actions/actions_info";

import PokemonDisplay from "./PokemonDisplay";

class PokemonDisplayContainer extends React.Component {
    static propTypes = {
        appOverlayShowSet: PropTypes.func,
        appPopupShowSet: PropTypes.func,
        infoCurrentSet: PropTypes.func,
        pokemon: PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string
        })
    };
    render(){
        const {
            appOverlayShowSet,
            appPopupShowSet,
            infoCurrentSet,
            pokemon
        } = this.props;
        return (
            <PokemonDisplay
                onImgClick={() => {
                    infoCurrentSet(pokemon.name);
                    appOverlayShowSet(true);
                    appPopupShowSet(true);
                }}
                pokemon={pokemon}
            />
        );
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        appOverlayShowSet,
        appPopupShowSet,
        infoCurrentSet
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(PokemonDisplayContainer);
