import { useDispatch } from "react-redux";
import { ContactItemButton, ContactItemLi } from "./ContactItem.styled";
import { deleteContact } from "redux/contacts/operations";


export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const hendelDelete = () => dispatch(deleteContact(id));
  
  return (
    <ContactItemLi>
      {name}: {number}
      <ContactItemButton onClick={hendelDelete}>Delete</ContactItemButton>
    </ContactItemLi>
  );
};