import type {RootState} from "src/store/store";

export const groupsSelector = (state: RootState) => state.groups.items;
