import PropTypes from "prop-types";
import React from "react";
import "./PokemonDisplay.styl";

const spriteSources = {
    "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/$pkid.png",
    "pokeres": "https://pokeres.bastionbot.org/images/pokemon/$pkid.png",
    "go": "https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_$pkid_00.png"
}

const PokemonDisplay = React.forwardRef(({ id, name, onClick, url }, ref) => (
    <div className="PokemonDisplay" onClick={onClick}>
        <p>{id.toString().padStart(3, "0")}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
        <img className="PokemonDisplay-img" src={spriteSources.default.replace(/\$pkid/g, id)}></img>
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
