import React, {memo} from 'react';
import {Col, Row} from 'react-bootstrap';
import {GroupContactsCard} from 'src/components/GroupContactsCard';
import {useAppSelector} from "src/hooks/hooks";
import {groupsSelector} from "src/store/selectors";

export const GroupListPage = memo(() => {
  const groups     = useAppSelector(groupsSelector);

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
