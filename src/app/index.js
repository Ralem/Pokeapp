import "./app.styl";
import React, { Component } from "react";

import { AppOverlayContainer } from "components/AppOverlay";
import { Box } from "components/Box";
import { PokeInfoContainer } from "components/PokeInfo";
import { PokeListContainer, PokeListCaptured } from "components/PokeList";
import { PokeSelector } from "components/PokeSelector";
import { PokeTitle } from "components/PokeTitle";
import { PopupContainer } from "components/Popup";
import { TabContainer, TabWrapper } from "components/Tab";
import { ViewContainer, ViewSwitch } from "components/View";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PokeTitle>PokeDex</PokeTitle>
                <TabWrapper>
                    <TabContainer forView="all">{"All Pokemon"}</TabContainer>
                    <TabContainer forView="captured">{"Captured Pokemon"}</TabContainer>
                </TabWrapper>
                <PokeSelector addClass="PokeSelector--centered"/>
                <ViewSwitch>
                    <ViewContainer key="all" viewId="all">
                        <Box>
                            <h1>Hello</h1>
                        </Box>
                        <PokeListContainer/>
                    </ViewContainer>
                    <ViewContainer key="captured" viewId="captured"><PokeListCaptured/></ViewContainer>
                </ViewSwitch>
                <AppOverlayContainer/>
                <PopupContainer>
                    <PokeInfoContainer/>
                </PopupContainer>
            </div>
        );
    }
};

export default App;
