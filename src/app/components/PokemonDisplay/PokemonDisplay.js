import PropTypes from "prop-types";
import React from "react";
import "./PokemonDisplay.styl";

import { CapturedSelectContainer } from "components/CapturedSelect";

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
            <a
                className="PokemonDisplay-name"
                href={pokemon.url}
                target="_blank"
                rel="noopener noreferrer"
            >{pokemon.name.replace(/-m/, "♂").replace(/-f/, "♀")}</a>
            <CapturedSelectContainer pokemon={pokemon}/>
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
