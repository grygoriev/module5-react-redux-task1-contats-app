import { ContactDto } from 'src/types/dto/ContactDto';
import { RootAction, CONTACTS_FETCH_FAILURE, CONTACTS_FETCH_REQUEST, CONTACTS_FETCH_SUCCESS} from "src/store/actions";

export interface ContactsState {
    items: ContactDto[];
    loading: boolean;
    error?: string;
}
const initial: ContactsState = { items: [], loading: false };

export const contactsReducer = (
    state = initial,
    action: RootAction
): ContactsState => {
    switch (action.type) {
        case CONTACTS_FETCH_REQUEST:
            return { ...state, loading: true, error: undefined };
        case CONTACTS_FETCH_SUCCESS:
            return { ...state, loading: false, items: action.payload };
        case CONTACTS_FETCH_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};
