import {
    CAPTURED_ADD,
    CAPTURED_REMOVE
} from "actions/actions_captured";

const initialState = {
    selected: {},
};

export default function(state = initialState, { type, payload }){
    switch (type) {
        case CAPTURED_ADD:
            return { ...state, selected: { ...state.selected, [payload.name]: payload } };
        case CAPTURED_REMOVE:
            return {
                ...state,
                selected: Object.entries(state.selected).reduce((newSelected, [ name, pokemon ]) => {
                    if (name !== payload.name) newSelected[name] = pokemon;
                    return newSelected;
                }, {})
            };
    }
    return state;
};
