import "./app.styl";
import axios from "axios";
import React, { Component } from "react";

import { PokeListContainer } from "components/PokeList";
import { PokeTitle } from "components/PokeTitle";

class App extends Component {
    state = {
        limit: 20,
        pokemon: [],
        maxPokemon: 807,
    }
    requesting = false;
    constructor(){
        super();
        this.getPokemonList = this.getPokemonList.bind(this);
    }
    async getPokemonList(){
        try {
            if (this.requesting) return;
            const {
                limit,
                next: PrevNext
            } = this.state;
            const endpoint = PrevNext || `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`;
            this.requesting = true;
            const request = await axios.get(endpoint);
            const next = request.data.next;
            const pokemon = request.data.results;
            this.setState(s => ({
                ...s,
                next,
                pokemon: [...s.pokemon, ...pokemon]
            }));
            this.requesting = false;
        } catch (error) {
            // set Error state here
            this.requesting = false;
            console.error(error);
        }
    }
    componentDidMount(){
        this.getPokemonList();
    }
    render() {
        return (
            <div className="App">
                <PokeTitle>PokeDex</PokeTitle>
                <PokeListContainer pokemon={this.state.pokemon}/>
            </div>
        );
    }
};

export default App;
