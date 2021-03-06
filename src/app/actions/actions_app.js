export const APP_SHOW_CAPTURED_SET = "APP_SHOW_CAPTURED_SET";
export const APP_OVERLAY_SHOW_SET = "APP_OVERLAY_SHOW_SET";
export const APP_POPUP_SHOW_SET = "APP_POPUP_SHOW_SET";
export const APP_VIEW_CURRENT_SET = "APP_VIEW_CURRENT_SET";

export const appShowCapturedSet = payload => ({ type: APP_SHOW_CAPTURED_SET, payload });
export const appOverlayShowSet = payload => ({ type: APP_OVERLAY_SHOW_SET, payload });
export const appPopupShowSet = payload => ({ type: APP_POPUP_SHOW_SET, payload });
export const appViewCurrentSet = payload => ({ type: APP_VIEW_CURRENT_SET, payload });
