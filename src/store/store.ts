import {
    applyMiddleware,
    combineReducers,
    createStore,
    AnyAction,
} from 'redux';

import {
    thunk as thunkMiddleware,         // ← берём ИМЕНОВАННЫЙ export
    ThunkMiddleware,
} from 'redux-thunk';

import { contactsReducer }   from './reducers/contactsReducer';
import { groupsReducer }     from './reducers/groupsReducer';
import { favoritesReducer }  from './reducers/favoritesReducer';

const rootReducer = combineReducers({
    contacts:   contactsReducer,
    groups:     groupsReducer,
    favorites:  favoritesReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware as ThunkMiddleware<RootState, AnyAction>)
);
