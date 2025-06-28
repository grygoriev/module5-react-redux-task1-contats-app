import {RootAction, FAVORITE_TOGGLE} from 'src/store/actions';

export type FavoritesState = string[];

const initial: FavoritesState = [];

export const favoritesReducer = (
    state = initial,
    action: RootAction
): FavoritesState => {
    if (action.type === FAVORITE_TOGGLE) {
        return state.includes(action.payload)
            ? state.filter((id) => id !== action.payload)
            : [...state, action.payload];
    }
    return state;
};
