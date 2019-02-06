import PropTypes from "prop-types";
import React from "react";

import { CapturedSelectContainer } from "components/CapturedSelect";
import "./PokemonDisplay.styl";

const spriteSources = {
    // Pad 0
    "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/$pkid.png",
    // Pad 3
    "official": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/$pkid.png"
}

function getId(pokemon) {
    return pokemon && pokemon.url
        ? pokemon.url.replace(/https:\/\/pokeapi\.co\/api\/v2\/pokemon\//, "").replace(/\//, "")
        : ""
    ;
}

const PokemonDisplay = React.forwardRef(({ pokemon, onClick, onImgClick }, ref) => {
    const id = getId(pokemon);
    return (
        <div
            className="PokemonDisplay"
            onClick={onClick}
        >
            <p className="PokemonDisplay-number">{id.toString().padStart(3, "0")}</p>
            <img
                className="PokemonDisplay-img"
                onClick={onImgClick}
                src={spriteSources.official.replace(/\$pkid/g, id.toString().padStart(3, "0"))}
            ></img>
            <div className="PokemonDisplay-controls">
                <CapturedSelectContainer
                    addClass={"PokemonDisplay-CapturedSelect"}
                    pokemon={pokemon}
                />
                <p className="PokemonDisplay-name">{pokemon.name}</p>
            </div>
        </div>
    )
});
PokemonDisplay.displayName = "PokemonDisplay";
PokemonDisplay.propTypes = {
    onClick: PropTypes.func,
    onImgClick: PropTypes.func,
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
};

export default PokemonDisplay;
