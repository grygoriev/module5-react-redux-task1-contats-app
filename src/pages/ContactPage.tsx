import React, {useEffect, useState} from 'react';
import {Col, Row} from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {ContactDto} from 'src/models/types/dto/ContactDto';
import {ContactCard} from 'src/components/ContactCard';
import {Empty} from 'src/components/Empty';
import {useAppSelector} from "src/hooks/hooks";
import {contactsSelector} from "src/store/selectors";


export const ContactPage = () => {
  const {contactId} = useParams<{ contactId: string }>();
  const [contact, setContact] = useState<ContactDto>();
  const contacts   = useAppSelector(contactsSelector);

  useEffect(() => {
    setContact(contacts.find((contact) => contact.id === contactId));
  }, [contactId, contacts]);

  return (
    <Row xxl={3}>
      <Col className={'mx-auto'}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
