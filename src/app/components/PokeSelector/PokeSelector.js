import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import {
    appOverlayShowSet,
    appPopupShowSet
} from "actions/actions_app";

import { Button } from "components/Button";
import { infoCurrentSet } from "actions/actions_info";

import { Icon } from "components/Icon";
import { Input } from "components/Input";

import "./PokeSelector.styl";
class PokeSelector extends React.Component {
    static propTypes = {
        addClass: PropTypes.string,
        appOverlayShowSet: PropTypes.func,
        appPopupShowSet: PropTypes.func,
        infoCurrentSet: PropTypes.func
    };
    inputRef = React.createRef();
    selectPokemon(event){
        event.preventDefault();
        let pokemonName = this.inputRef.current.value;
        if (pokemonName && pokemonName !== ""){
            if (/\d/.test(pokemonName)) pokemonName = parseInt(pokemonName, 10).toString();
            this.props.infoCurrentSet(pokemonName.toLowerCase());
            this.props.appOverlayShowSet(true);
            this.props.appPopupShowSet(true);
        }
    }
    constructor(){
        super();
        this.selectPokemon = this.selectPokemon.bind(this);
    }
    render() {
        return (
            <form
                className={`PokeSelector ${this.props.addClass || ""}`}
                onSubmit={this.selectPokemon}
            >
                <Input
                    addClass="PokeSelector-input"
                    placeholder="Pokemon name or number"
                    ref={this.inputRef}
                />
                <Button type="submit">
                    <Icon type="search"/>
                </Button>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        appOverlayShowSet,
        appPopupShowSet,
        infoCurrentSet
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(PokeSelector);
