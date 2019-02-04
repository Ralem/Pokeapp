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
    render() {
        const {
            selected,
            pokemon
        } = this.props;
        return (
            <PokeList
                captured={selected}
                pokemon={pokemon}
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
