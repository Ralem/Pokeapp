import {
    APP_OVERLAY_SHOW_SET,
    APP_POPUP_SHOW_SET,
    APP_SHOW_CAPTURED_SET,
    APP_VIEW_CURRENT_SET
} from "actions/actions_app";

const initialState = {
    currentView: "all",
    showCaptured: false,
    showOverlay: false,
    showPopup: false
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case APP_OVERLAY_SHOW_SET:
            return { ...state, showOverlay: payload };
        case APP_POPUP_SHOW_SET:
            return { ...state, showPopup: payload };
        case APP_SHOW_CAPTURED_SET:
            return { ...state, showCaptured: payload };
        case APP_VIEW_CURRENT_SET:
            return { ...state, currentView: payload };
    }
    return state;
};
