import React, {memo, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/models/types/dto/ContactDto';
import {GroupContactsDto} from 'src/models/types/dto/GroupContactsDto';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
import {useAppSelector} from "src/hooks/hooks";
import {contactsSelector, groupsSelector} from "src/store/selectors";

export const GroupPage = memo(() => {
  const {groupId} = useParams<{ groupId: string }>();
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();
  const contactsState   = useAppSelector(contactsSelector);
  const groupContactsState     = useAppSelector(groupsSelector);

  useEffect(() => {
    const groupFiltered = groupContactsState.find((group) => group.id === groupId);
    setGroupContacts(groupFiltered);
    setContacts(
        groupFiltered ? contactsState.filter((contact) => groupFiltered.contactIds.includes(contact.id)) : []
    );
  }, [groupId, contactsState, groupContactsState]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                <GroupContactsCard groupContacts={groupContacts} />
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {contacts.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
              ))}
            </Row>
          </Col>
        </>
      ) : <Empty />}
    </Row>
  );
});
