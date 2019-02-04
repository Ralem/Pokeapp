import PropTypes from "prop-types";
import React from "react";
import "./PokemonDisplay.styl";

const spriteSources = {
    "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/$pkid.png",
    "pokeres": "https://pokeres.bastionbot.org/images/pokemon/$pkid.png",
    "official": "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/$pkid.png"
}

const PokemonDisplay = React.forwardRef(({ id, name, onClick, url }, ref) => (
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
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >{name.replace(/-m/, "♂").replace(/-f/, "♀")}</a>
    </div>
));
PokemonDisplay.displayName = "PokemonDisplay";
PokemonDisplay.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    onClick: PropTypes.func,
    url: PropTypes.string,
};

export default PokemonDisplay;
