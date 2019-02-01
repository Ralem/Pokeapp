import React, { Component } from "react";
import { styled } from "styletron-react";

const AppWrapper = styled("section", {
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    overflow: "auto"
});

class App extends Component {
    render() {
        return (
            <AppWrapper>
                <h1>I{"'"}m a React App</h1>
            </AppWrapper>
        );
    }
};

export default App;
