import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import PokeInfo from "./PokeInfo";

export class PokeInfoContainer extends React.Component {
    static propTypes = {
        current: PropTypes.string,
        pokemonUrl: PropTypes.string,
    }
    state = {
        onRequest: false,
        pokemon: {}
    };
    async getPokeInfo(){
        try {
            if (this.state.onRequest) return false;
            const current = this.props.current;
            this.setState({ onRequest: true });
            const request = await axios.get(`https://pokeapi.co/api/v2/pokemon/${current}`);
            this.setState({
                onRequest: false,
                pokemon: {
                    ...request.data,
                    url: `https://pokeapi.co/api/v2/pokemon/${request.data.id}/`
                },
            });
            this.onRequest = false;
        } catch (error) {
            console.error(error);
            this.setState({
                onRequest: false,
                pokemon: {}
            });
        }
    }
    componentDidMount(){
        this.getPokeInfo();
    }
    componentDidUpdate({ current: prevCurrent }){
        if (this.props.current !== prevCurrent) {
            this.getPokeInfo();
        }
    }
    render() {
        return (
            this.state.pokemon.name
                ? (
                    <PokeInfo
                        pokemon={this.state.pokemon}
                    />
                )
                : null
        );
    }
};

function mapStateToProps({
    info: {
        current
    }
}) {
    return { current };
}

export default connect(mapStateToProps)(PokeInfoContainer);
