import { APP_SHOW_CAPTURED_SET } from "actions/actions_app";

const initialState = {
    showCaptured: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case APP_SHOW_CAPTURED_SET:
            return { ...state, showCaptured: payload };
    }
    return state;
};
