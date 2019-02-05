import "./app.styl";
import React, { Component } from "react";

import { PokeListContainer } from "components/PokeList";
import { PokeTitle } from "components/PokeTitle";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PokeTitle>PokeDex</PokeTitle>
                <PokeListContainer/>
            </div>
        );
    }
};

export default App;
