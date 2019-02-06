import "./app.styl";
import React, { Component } from "react";

import { AppOverlayContainer } from "components/AppOverlay";
import { CapturedToggle } from "components/CapturedToggle";
import { PokeListContainer } from "components/PokeList";
import { PokeTitle } from "components/PokeTitle";
import { PokeInfoContainer } from "components/PokeInfo";
import { PopupContainer } from "components/Popup";
import { TabContainer, TabWrapper } from "components/Tab";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PokeTitle>PokeDex</PokeTitle>
                <TabWrapper>
                    <TabContainer
                        forView="all"
                    >{"All Pokemon"}</TabContainer>
                    <TabContainer
                        forView="captured"
                    >{"Captured Pokemon"}</TabContainer>
                </TabWrapper>
                <CapturedToggle/>
                <PokeListContainer/>
                <AppOverlayContainer/>
                <PopupContainer>
                    <PokeInfoContainer/>
                </PopupContainer>
            </div>
        );
    }
};

export default App;
