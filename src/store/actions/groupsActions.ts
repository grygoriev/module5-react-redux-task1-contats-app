import { Dispatch } from 'redux';
import {GroupContactsDto} from "src/models/types/dto/GroupContactsDto";
import {api} from "src/api";

export const GROUPS_FETCH_REQUEST   = 'GROUPS_FETCH_REQUEST';
export const GROUPS_FETCH_SUCCESS   = 'GROUPS_FETCH_SUCCESS';
export const GROUPS_FETCH_FAILURE   = 'GROUPS_FETCH_FAILURE';

export const fetchGroups = () => async (dispatch: Dispatch) => {
    dispatch({ type: GROUPS_FETCH_REQUEST });
    try {
        const data: GroupContactsDto[] = await api.getGroups();
        dispatch({ type: GROUPS_FETCH_SUCCESS, payload: data });
    } catch (e) {
        dispatch({ type: GROUPS_FETCH_FAILURE, error: String(e) });
    }
};
