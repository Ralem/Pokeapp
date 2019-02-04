import PropTypes from "prop-types";
import React from "rect";

import PokemonDisplay from "./PokemonDisplay";

export default class PokemonDisplayContainer extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string
    };
    render(){
        const {
            id,
            name,
            url
        } = this.props;
        return (
            <PokemonDisplay
                id={id}
                name={name}
                url={url}
            />
        );
    }
};
