import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import PokeList from "./PokeList";

class PokeListContainer extends React.Component {
    static propTypes = {
        pokemon: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string
        })),
        selected: PropTypes.array
    }
    PokeListRef = React.createRef()
    componentDidUpdate(){
        const poke = this.PokeListRef.current.querySelectorAll(".PokemonDisplay");
        const lastPoke = poke[poke.length - 1];
        const windowHeight = window.innerHeight;
        console.log(lastPoke);
        if (lastPoke.getBoundingClientRect().bottom < windowHeight) console.log("load");
    }
    render() {
        const {
            selected,
            pokemon
        } = this.props;
        return (
            <PokeList
                captured={selected}
                pokemon={pokemon}
                ref={this.PokeListRef}
            />
        );
    }
}

// Get selected from store
function mapStateToProps({
    captured: {
        selected
    }
}) {
    return {
        selected
    };
};

export default connect(mapStateToProps)(PokeListContainer);
