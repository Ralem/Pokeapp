import {
    CAPTURED_ADD,
    CAPTURED_REMOVE
} from "actions/actions_captured";

const initialState = {
    selected: [],
};

export default function(state = initialState, { type, payload }){
    switch (type) {
        case CAPTURED_ADD:
            return { ...state, selected: [ ...state.selected, payload ] };
        case CAPTURED_REMOVE:
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
