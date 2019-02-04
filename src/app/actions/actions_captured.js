export const CAPTURED_ADD = "CAPTURED_ADD";
export const CAPTURED_REMOVE = "CAPTURED_REMOVE";

export const capturedAdd = payload => ({ type: CAPTURED_ADD, payload });
export const capturedRemove = payload => ({ type: CAPTURED_REMOVE, payload });
