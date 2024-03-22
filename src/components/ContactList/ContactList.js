import { useSelector } from "react-redux";
import { ContactItem } from "components/ContactItem/ContactItem";
import { ContactListUl } from "./ContactList.styled";
import { selectVisibleContacts } from "redux/contacts/selectors";

export const ContactList = () => {
  const сontacts = useSelector(selectVisibleContacts);
 
  return (
    <ContactListUl>
      {сontacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}        
        />
      ))}
    </ContactListUl>
  );
};