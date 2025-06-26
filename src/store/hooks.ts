import {
    TypedUseSelectorHook,
    useDispatch,
    useSelector,
} from 'react-redux';
import type { RootState } from './store';
import type { AnyAction } from 'redux';
import type { ThunkDispatch } from 'redux-thunk';

export const useAppDispatch = () =>
    useDispatch<ThunkDispatch<RootState, unknown, AnyAction>>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
