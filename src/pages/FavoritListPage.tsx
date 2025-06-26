import {useAppSelector} from "src/store/hooks";
import {memo, useMemo} from "react";
import {Col, Row} from "react-bootstrap";
import {ContactCard} from "src/components/ContactCard";

export const FavoritListPage = memo(() => {
  const favoriteIds = useAppSelector((state) => state.favorites);
  const contacts    = useAppSelector((state) => state.contacts.items);

  const visible = useMemo(
      () => contacts.filter((c) => favoriteIds.includes(c.id)),
      [contacts, favoriteIds]
  );

  return (
      <Row xxl={4} className="g-4">
        {visible.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
        ))}
      </Row>
  );
});
