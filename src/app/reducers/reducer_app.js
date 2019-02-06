import {
    APP_SHOW_CAPTURED_SET,
    APP_OVERLAY_SHOW_SET
} from "actions/actions_app";

const initialState = {
    showCaptured: false,
    showOverlay: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case APP_SHOW_CAPTURED_SET:
            return { ...state, showCaptured: payload };
        case APP_OVERLAY_SHOW_SET:
            return { ...state, showOverlay: payload };
    }
    return state;
};
