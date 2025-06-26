import React, {memo} from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {useAppSelector} from "src/store/hooks";

export const GroupListPage = memo(() => {
  const groups     = useAppSelector((s) => s.groups.items);

  return (
    <Row xxl={4}>
      {groups.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
