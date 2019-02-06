import "./app.styl";
import React, { Component } from "react";

import { CapturedToggle } from "components/CapturedToggle";
import { PokeListContainer } from "components/PokeList";
import { PokeTitle } from "components/PokeTitle";
import { PokeInfoContainer } from "components/PokeInfo";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PokeTitle>PokeDex</PokeTitle>
                <CapturedToggle/>
                <PokeInfoContainer/>
                <PokeListContainer/>
            </div>
        );
    }
};

export default App;
