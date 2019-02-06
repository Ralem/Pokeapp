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
            const { [payload.name]: toRemove, ...selectedLeft } = state.selected;
            return {
                ...state,
                selected: { ...selectedLeft }
            };
    }
    return state;
};
