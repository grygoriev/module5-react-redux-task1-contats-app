import { ContactDto } from '../types/dto/ContactDto'
import {DATA_CONTACT} from "src/__data__";

const FAKE_DELAY = 300

export const contactService = {

    fetchAll: (): Promise<ContactDto[]> =>
        new Promise((resolve) =>
            setTimeout(() => resolve(DATA_CONTACT as ContactDto[]), FAKE_DELAY)
        ),


    fetchById: (id: string): Promise<ContactDto | undefined> =>
        new Promise((resolve) =>
            setTimeout(
                () =>
                    resolve(
                        (DATA_CONTACT as ContactDto[]).find((c) => c.id === id)
                    ),
                FAKE_DELAY
            )
        ),
}
