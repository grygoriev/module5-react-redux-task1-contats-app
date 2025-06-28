export const FAVORITE_TOGGLE        = 'FAVORITE_TOGGLE';

export const toggleFavorite = (id: string) =>
    ({ type: FAVORITE_TOGGLE, payload: id } as const);
