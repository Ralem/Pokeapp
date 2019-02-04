import {
    FAVORITES_ADD,
    FAVORITES_REMOVE
} from "actions/actions_favorites";

const initialState = {
    selected: [],
};

export default function(state = initialState, { type, payload }){
    switch (type) {
        case FAVORITES_ADD:
            return { ...state, selected: [ ...state.selected, payload ] };
        case FAVORITES_REMOVE:
            return {
                ...state,
                selected: [
                    // Filter state.selected then destructure the array
                    ...state.selected.filter(selected => selected !== payload)
                ]
            };
    }
    return state;
};
