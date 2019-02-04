import PropTypes from "prop-types";
import React from "react";
import { styled } from "styletron-react";

const StyledImg = styled("img", {
    position: "absolute",
    left: "50%",
    top: "50%",
    maxWidth: "100%",
    maxHeight: "100%",
    transform: "translate(-50%, -50%)",
    opacity: 0.6,
    ":hover": {
        opacity: 1,
        transform: "translate(-50%, -50%) scale(1.5)"
    }
});

const PokemonDisplayWrapper = styled("div", {
    position: "relative",
    width: "196px",
    height: "196px",
    margin: "20px",
    backgroundColor: "#525252",
    userSelect: "none",
    cursor: "pointer",
});

const spriteSources = {
    "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/$pkid.png",
    "pokeres": "https://pokeres.bastionbot.org/images/pokemon/$pkid.png",
    "go": "https://raw.githubusercontent.com/ZeChrales/PogoAssets/master/pokemon_icons/pokemon_icon_$pkid_00.png"
}

const PokemonDisplay = React.forwardRef(({ id, name, onClick, url }, ref) => (
    <PokemonDisplayWrapper onClick={onClick}>
        <p>{id.toString().padStart(3, "0")}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
        <StyledImg src={spriteSources.default.replace(/\$pkid/g, id)}></StyledImg>
    </PokemonDisplayWrapper>
));
PokemonDisplay.displayName = "PokemonDisplay";
PokemonDisplay.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    onClick: PropTypes.func,
    url: PropTypes.string,
};

export default PokemonDisplay;
