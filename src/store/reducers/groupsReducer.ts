import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';
import {GROUPS_FETCH_FAILURE, GROUPS_FETCH_REQUEST, GROUPS_FETCH_SUCCESS, RootAction} from 'src/store/actions';

export interface GroupsState {
    items: GroupContactsDto[];
    loading: boolean;
    error?: string;
}
const initial: GroupsState = { items: [], loading: false };

export const groupsReducer = (
    state = initial,
    action: RootAction
): GroupsState => {
    switch (action.type) {
        case GROUPS_FETCH_REQUEST:
            return { ...state, loading: true, error: undefined };
        case GROUPS_FETCH_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case GROUPS_FETCH_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};
