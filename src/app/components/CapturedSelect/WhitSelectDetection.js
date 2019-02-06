import PropTypes from "prop-types";
import React from "react";

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

const WhitSelectDetection = WrappedComponent => {
    class WhitSelectDetection extends React.Component {
        static propTypes = {
            pokemon: PropTypes.shape({
                name: PropTypes.string,
                url: PropTypes.string,
            }).isRequired,
            selected: PropTypes.object.isRequired
        };
        state = {
            isSelected: false
        }
        isSelected(pokemon, selectedPokemon) {
            this.setState({
                isSelected: selectedPokemon[pokemon.name] !== undefined
            })
        }
        componentDidMount() {
            this.isSelected(this.props.pokemon, this.props.selected);
        }
        componentDidUpdate({ pokemon: prevPokemon, selected: prevSelected }) {
            if (
                this.props.pokemon !== prevPokemon ||
                this.props.selected !== prevSelected
            ) {
                this.isSelected(this.props.pokemon, this.props.selected);
            }
        }
        render() {
            return (
                <WrappedComponent
                    isSelected={this.state.isSelected}
                    {...this.props}
                />
            )
        }
    };
    WhitSelectDetection.displayName = `WhitSelectDetection(${getDisplayName(WrappedComponent)})`;
    return WhitSelectDetection;
};

export default WhitSelectDetection;
