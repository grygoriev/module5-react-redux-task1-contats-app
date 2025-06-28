import { Dispatch } from 'redux';
import {ContactDto} from "src/models/types/dto/ContactDto";
import {api} from "src/api";

export const CONTACTS_FETCH_REQUEST = 'CONTACTS_FETCH_REQUEST';
export const CONTACTS_FETCH_SUCCESS = 'CONTACTS_FETCH_SUCCESS';
export const CONTACTS_FETCH_FAILURE = 'CONTACTS_FETCH_FAILURE';

export const fetchContacts = () => async (dispatch: Dispatch) => {
    dispatch({ type: CONTACTS_FETCH_REQUEST });
    try {
        const data: ContactDto[] = await api.getContacts();
        dispatch({ type: CONTACTS_FETCH_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: CONTACTS_FETCH_FAILURE, error: String(e) });
    }
};
