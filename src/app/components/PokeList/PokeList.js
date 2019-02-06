import "./PokeList.styl";
import PropTypes from "prop-types";
import React from "react";

import { PokemonDisplayContainer } from "components/PokemonDisplay";

const PokeList = React.forwardRef(({ captured, pokemon, showCaptured }, ref) => {
    return (
        <div className={"PokeList"} ref={ref}>
            {
                showCaptured
                    ? (
                        (Object.entries(captured)).sort((a, b) => a[1].id - b[1].id).map(([ name, pokemon ]) => (
                            <PokemonDisplayContainer
                                key={`pokemon-${name}`}
                                pokemon={pokemon}
                            />
                        ))
                    )
                    : (
                        pokemon.map(p => (
                            <PokemonDisplayContainer
                                key={`poke-${p.name}`}
                                pokemon={p}
                            />
                        ))
                    )
            }
        </div>
    )
});
PokeList.displayName = "PokeList";
PokeList.propTypes = {
    captured: PropTypes.object,
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
