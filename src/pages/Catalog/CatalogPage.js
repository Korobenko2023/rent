import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/contacts/operations";
import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors";
import { ContactsTitle } from "./CatalogPage.styled";

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm /> 
         {isLoading && !error && <Loader />}
         {error && (toast.error('Oops! Something went wrong. Please try again later.'))}
         {contacts.length > 0 ? (
             <>
               <ContactsTitle>Contacts list</ContactsTitle>              
               <Filter />
               <ContactList />
             </>
            ) : null}          
    </>
  );
}