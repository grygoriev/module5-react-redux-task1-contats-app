import { GroupContactsDto } from '../types/dto/GroupContactsDto'
import {DATA_GROUP_CONTACT} from "src/__data__";

const FAKE_DELAY = 300

export const groupContactService = {

    fetchAll: (): Promise<GroupContactsDto[]> =>
        new Promise((resolve) =>
            setTimeout(() => resolve(DATA_GROUP_CONTACT as GroupContactsDto[]), FAKE_DELAY)
        ),

    fetchById: (id: string): Promise<GroupContactsDto | undefined> =>
        new Promise((resolve) =>
            setTimeout(
                () =>
                    resolve(
                        (DATA_GROUP_CONTACT as GroupContactsDto[]).find((g) => g.id === id)
                    ),
                FAKE_DELAY
            )
        ),
}
