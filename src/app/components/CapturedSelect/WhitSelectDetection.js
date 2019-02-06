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
            selected: PropTypes.array.isRequired
        };
        state = {
            isSelected: false
        }
        static getDerivedStateFromProps({ pokemon, selected }) {
            const foundSelected = selected.find(s => s.name === pokemon.name || s.id === pokemon.id);
            return {
                isSelected: foundSelected !== undefined
            };
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
