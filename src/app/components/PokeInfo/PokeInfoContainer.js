import axios from "axios";
import PropTypes from "prop-types";
import React from "react";

import PokeInfo from "./PokeInfo";

export class PokeInfoContainer extends React.Component {
    static propTypes = {
        pokemonUrl: PropTypes.string,
    }
    state = {
        pokemon: {}
    };
    async componentDidMount(){
        const request = await axios.get("https://pokeapi.co/api/v2/pokemon/6/");
        this.setState({
            pokemon: request.data,
        })
    }
    render() {
        return (
            this.state.pokemon.name
                ? (
                    <PokeInfo
                        pokemon={this.state.pokemon}
                    />
                )
                : null
        );
    }
};

export default PokeInfoContainer;
