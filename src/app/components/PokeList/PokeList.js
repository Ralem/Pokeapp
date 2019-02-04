import "./PokeList.styl";
import PropTypes from "prop-types";
import React from "react";

import { PokemonDisplayContainer } from "components/PokemonDisplay";

const PokeList = ({ captured, pokemon, showCaptured }) => (
    <div className={"PokeList"}>
        {pokemon.map(p => (
            showCaptured &&
            captured.indexOf(p.name) < 0
                ? null
                : (
                    <PokemonDisplayContainer
                        key={`pokemon-${p.name}`}
                        pokemon={p}
                    />
                )
        ))}
    </div>
);
PokeList.displayName = "PokeList";
PokeList.propTypes = {
    captured: PropTypes.array,
    pokemon: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        url: PropTypes.string
    })),
    showCaptured: PropTypes.bool
};
PokeList.defaultProps = {
    pokemon: [],
};

export default PokeList;
