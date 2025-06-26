import { Dispatch } from 'redux';
import {ContactDto} from "src/types/dto/ContactDto";
import {GroupContactsDto} from "src/types/dto/GroupContactsDto";
import {api} from "src/api";

export const CONTACTS_FETCH_REQUEST = 'CONTACTS_FETCH_REQUEST';
export const CONTACTS_FETCH_SUCCESS = 'CONTACTS_FETCH_SUCCESS';
export const CONTACTS_FETCH_FAILURE = 'CONTACTS_FETCH_FAILURE';

export const GROUPS_FETCH_REQUEST   = 'GROUPS_FETCH_REQUEST';
export const GROUPS_FETCH_SUCCESS   = 'GROUPS_FETCH_SUCCESS';
export const GROUPS_FETCH_FAILURE   = 'GROUPS_FETCH_FAILURE';

export const FAVORITE_TOGGLE        = 'FAVORITE_TOGGLE';

export const fetchContacts = () => async (dispatch: Dispatch) => {
    dispatch({ type: CONTACTS_FETCH_REQUEST });
    try {
        const data: ContactDto[] = await api.getContacts();
        dispatch({ type: CONTACTS_FETCH_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: CONTACTS_FETCH_FAILURE, error: String(e) });
    }
};

export const fetchGroups = () => async (dispatch: Dispatch) => {
    dispatch({ type: GROUPS_FETCH_REQUEST });
    try {
        const data: GroupContactsDto[] = await api.getGroups();
        dispatch({ type: GROUPS_FETCH_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: GROUPS_FETCH_FAILURE, error: String(e) });
    }
};

export const toggleFavorite = (id: string) =>
    ({ type: FAVORITE_TOGGLE, payload: id } as const);

export type RootAction =
    | ReturnType<typeof toggleFavorite>
    | { type: string; payload?: any; error?: string };
