export const FAVORITES_ADD = "FAVORITES_ADD";
export const FAVORITES_REMOVE = "FAVORITES_REMOVE";

export const favoritesAdd = payload => ({ type: FAVORITES_ADD, payload });
export const favoritesRemove = payload => ({ type: FAVORITES_REMOVE, payload });
