import React, { memo, useMemo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ContactCard } from 'src/components/ContactCard';
import { FilterForm, FilterFormValues } from 'src/components/FilterForm';
import { useAppSelector } from 'src/store/hooks';

export const ContactListPage = memo(() => {
  const contacts = useAppSelector((state) => state.contacts.items);
  const groups     = useAppSelector((state) => state.groups.items);

  const [filter, setFilter] = React.useState<Partial<FilterFormValues>>({});

  const visible = useMemo(() => {
    let list = contacts;
    if (filter.name) {
      const q = filter.name.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    if (filter.groupId) {
      const g = groups.find((gr) => gr.id === filter.groupId);
      if (g) list = list.filter((c) => g.contactIds.includes(c.id));
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
