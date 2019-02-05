import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import React from "react";

import PokeList from "./PokeList";

class PokeListContainer extends React.Component {
    static propTypes = {
        selected: PropTypes.array
    }
    PokeListRef = React.createRef();
    requesting = false;
    state = {
        limit: 20,
        maxPokemon: 807,
        offset: 0,
        pokemon: [],
    };
    constructor() {
        super();
        this.addEvents = this.addEvents.bind(this);
        this.getPokemonList = this.getPokemonList.bind(this);
        this.getLastPokemon = this.getLastPokemon.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.mustLoadMore = this.mustLoadMore.bind(this);
        this.removeEvents = this.removeEvents.bind(this);
    }
    async getPokemonList() {
        try {
            if (this.requesting) return;
            const {
                limit: standarLimit,
                maxPokemon,
                offset,
            } = this.state;
            const toLastPokemon = maxPokemon - offset;
            const limit = toLastPokemon < standarLimit ? toLastPokemon : standarLimit;
            const endpoint = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;
            this.requesting = true;
            const request = await axios.get(endpoint);
            const pokemon = request.data.results;
            this.setState(s => ({
                ...s,
                offset: offset + limit,
                pokemon: [...s.pokemon, ...pokemon]
            }));
            this.requesting = false;
            this.loadMore();
        } catch (error) {
            // set Error state here
            this.requesting = false;
            console.error(error);
        }
    }
    getLastPokemon() {
        const allPokemon = this.PokeListRef.current.querySelectorAll(".PokemonDisplay");
        return allPokemon[allPokemon.length - 1] || null;
    }
    mustLoadMore() {
        const lastPokemon = this.getLastPokemon();
        const pokeBoundings = lastPokemon ? lastPokemon.getBoundingClientRect() : {};
        const windowHeight = window.innerHeight;
        return (pokeBoundings.top <= (windowHeight + pokeBoundings.height));
    }
    loadMore() {
        if (
            !this.requesting &&
            this.state.pokemon.length < this.state.maxPokemon &&
            this.mustLoadMore()
        ) {
            this.getPokemonList()
        }
    }
    addEvents(){
        document.querySelector(".App").addEventListener("scroll", this.loadMore);
    }
    removeEvents(){
        document.querySelector(".App").removeEventListener("scroll", this.loadMore);
    }
    async componentDidMount(){
        await this.getPokemonList();
        this.addEvents();
    }
    componentWillUnmount() {
        this.removeEvents();
    }
    render() {
        return (
            <PokeList
                captured={this.props.selected}
                pokemon={this.state.pokemon}
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
