import React, {memo, useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/types/dto/ContactDto';
import {GroupContactsDto} from 'src/types/dto/GroupContactsDto';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {Empty} from 'src/components/Empty';
import {ContactCard} from 'src/components/ContactCard';
import {useAppSelector} from "src/store/hooks";

export const GroupPage = memo(() => {
  const {groupId} = useParams<{ groupId: string }>();
  const [contacts, setContacts] = useState<ContactDto[]>([]);
  const [groupContacts, setGroupContacts] = useState<GroupContactsDto>();
  const contactsState   = useAppSelector((s) => s.contacts.items);
  const groupContactsState     = useAppSelector((s) => s.groups.items);

  useEffect(() => {
    const group = groupContactsState.find((g) => g.id === groupId);
    setGroupContacts(group);
    setContacts(
        group ? contactsState.filter((c) => group.contactIds.includes(c.id)) : []
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
