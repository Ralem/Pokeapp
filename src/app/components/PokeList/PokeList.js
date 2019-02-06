import "./PokeList.styl";
import PropTypes from "prop-types";
import React from "react";

import { PokemonDisplayContainer } from "components/PokemonDisplay";

const PokeList = React.forwardRef(({ captured, pokemon, showCaptured }, ref) => (
    <div className={"PokeList"} ref={ref}>
        {
            showCaptured
                ? (<div></div>)
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
));
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
