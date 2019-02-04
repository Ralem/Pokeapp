import axios from "axios";
import React, { Component } from "react";
import { styled } from "styletron-react";
import { PokemonDisplay } from "components/PokemonDisplay";

const AppWrapper = styled("section", {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    overflow: "auto"
});

class App extends Component {
    state = {
        limit: 20,
        pokemon: [],
        next: undefined
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
            <AppWrapper>
                {this.state.pokemon.map((p, i) => (
                    <PokemonDisplay
                        id={i + 1}
                        key={`pokemon-${i}`}
                        name={p.name}
                        onClick={this.getPokemonList}
                    />
                ))}
            </AppWrapper>
        );
    }
};

export default App;
