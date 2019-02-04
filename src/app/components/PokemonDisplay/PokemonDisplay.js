import PropTypes from "prop-types";
import React from "react";
import "./PokemonDisplay.styl";

const spriteSources = {
    "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/$pkid.png",
    "pokeres": "https://pokeres.bastionbot.org/images/pokemon/$pkid.png",
    "official": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/$pkid.png"
}

function getId(pokemon) {
    return pokemon && pokemon.url
        ? pokemon.url.replace(/https:\/\/pokeapi\.co\/api\/v2\/pokemon\//, "").replace(/\//, "")
        : ""
    ;
}

const PokemonDisplay = React.forwardRef(({ pokemon, onClick }, ref) => {
    const id = getId(pokemon);
    return (
        <div
            className="PokemonDisplay"
            onClick={onClick}
        >
            <p className="PokemonDisplay-number">{id.toString().padStart(3, "0")}</p>
            <img
                className="PokemonDisplay-img"
                src={spriteSources.official.replace(/\$pkid/g, id.toString().padStart(3, "0"))}
            ></img>
            <a
                className="PokemonDisplay-name"
                href={pokemon.url}
                target="_blank"
                rel="noopener noreferrer"
            >{pokemon.name.replace(/-m/, "♂").replace(/-f/, "♀")}</a>
        </div>
    )
});
PokemonDisplay.displayName = "PokemonDisplay";
PokemonDisplay.propTypes = {
    onClick: PropTypes.func,
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })
};

export default PokemonDisplay;
