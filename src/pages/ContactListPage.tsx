import React, { memo, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { useAppSelector } from 'src/hooks/hooks';
import {contactsSelector, groupsSelector} from "src/store/selectors";

export const ContactListPage = memo(() => {
  const contacts = useAppSelector(contactsSelector);
  const groups     = useAppSelector(groupsSelector);

  const [filter, setFilter] = React.useState<Partial<FilterFormValues>>({});

  const visible = useMemo(() => {
    let list = contacts;
    if (filter.name) {
      const q = filter.name.toLowerCase();
      list = list.filter((contact) => contact.name.toLowerCase().includes(q));
    }
    if (filter.groupId) {
      const groupFiltered = groups.find((group) => group.id === filter.groupId);
      if (groupFiltered) list = list.filter((contact) => groupFiltered.contactIds.includes(contact.id));
    }
    return list;
  }, [contacts, groups, filter]);

  return (
      <Row xxl={1}>
        <Col className="mb-3">
          <FilterForm
              groupContactsList={groups}
              initialValues={{}}
              onSubmit={setFilter}
          />
        </Col>
        <Col>
          <Row xxl={4} className="g-4">
            {visible.map((contact) => (
                <Col key={contact.id}>
                  <ContactCard contact={contact} withLink />
                </Col>
            ))}
          </Row>
        </Col>
      </Row>
  );
});
