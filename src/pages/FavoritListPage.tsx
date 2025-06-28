import {useAppSelector} from "src/hooks/hooks";
import {memo, useMemo} from "react";
import {Col, Row} from "react-bootstrap";
import {ContactCard} from "src/components/ContactCard";
import {contactsSelector, favoritesSelector} from "src/store/selectors";

export const FavoritListPage = memo(() => {
  const favoriteIds = useAppSelector(favoritesSelector);
  const contacts    = useAppSelector(contactsSelector);

  const visible = useMemo(
      () => contacts.filter((contact) => favoriteIds.includes(contact.id)),
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
