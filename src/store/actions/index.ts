import { toggleFavorite } from "src/store/actions/favoritesActions";

export * from "src/store/actions/favoritesActions";
export * from "src/store/actions/contactsActions";
export * from "src/store/actions/groupsActions";

export type RootAction =
    | ReturnType<typeof toggleFavorite>
    | { type: string; payload?: any; error?: string };
