import { ContactDto } from 'src/models/types/dto/ContactDto';
import { GroupContactsDto } from 'src/models/types/dto/GroupContactsDto';
import {DATA_CONTACT, DATA_GROUP_CONTACT} from "src/__data__";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const api = {
    getContacts: async (): Promise<ContactDto[]> => {
        await delay(500);
        return DATA_CONTACT;
    },
    getGroups: async (): Promise<GroupContactsDto[]> => {
        await delay(500);
        return DATA_GROUP_CONTACT;
    },
};
