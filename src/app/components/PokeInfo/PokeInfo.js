import PropTypes from "prop-types";
import React from "react";

import { PokeTypeBadge } from "components/PokeTypeBadge";
import { CapturedSelectContainer } from "components/CapturedSelect";

import "./PokeInfo.styl";

const spriteSources = {
    // Pad 0
    "default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/$pkid.png",
    // Pad 3
    "official": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/$pkid.png"
}

const PokeInfo = ({ pokemon }) => {
    const formatedId = pokemon.id.toString().padStart(3, "0");
    return (
        <div className="PokeInfo">
            <div className="PokeInfo-body">
                <h2 className="PokeInfo-title">
                    <span className="PokeInfo-title-wrapper">
                        {pokemon.name} #{formatedId}
                    </span>
                </h2>
                <div className="PokeInfo-picture">
                    <div className="PokeInfo-picture-wrapper">
                        <img src={spriteSources.official.replace(/\$pkid/, formatedId)} className="PokeInfo-img" />
                        <div className="PokeInfo-picture-controls">
                            <CapturedSelectContainer
                                addClass="PokeInfo-picture-controls-CapturedSelect"
                                pokemon={pokemon}
                            />
                            <p className="PokeInfo-picture-controls-legend">Capture Pokemon</p>
                        </div>
                    </div>
                </div>
                <div className="PokeInfo-data">
                    <p className="PokeInfo-subtitle">Stats</p>
                    <div className="PokeInfo-stats">
                        {pokemon.stats.map(pks => (
                            <div
                                key={`PokeInfo-stat-${pks.stat.name}`}
                                className="PokeInfo-stat"
                            >
                                <p className="PokeInfo-stat-name">{pks.stat.name.replace(/-/, " ")}</p>
                                <p className="PokeInfo-stat-baseStat">{pks.base_stat}</p>
                            </div>
                        ))}
                    </div>
                    <p className="PokeInfo-subtitle">Type</p>
                    <div className="PokeInfo-types">
                        {
                            pokemon.types.reverse().map(typeContainer => {
                                return (<PokeTypeBadge
                                    key={`type-${typeContainer.type.name}`}
                                    type={typeContainer.type.name}
                                />)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
PokeInfo.displayName = "PokeInfo";
PokeInfo.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string
    })
};

export default PokeInfo;
