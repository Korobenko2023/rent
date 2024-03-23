// import { ContactForm } from "components/ContactForm/ContactForm";
// import { ContactList } from "components/ContactList/ContactList";
// import { Filter } from "components/Filter/Filter";
// import { Loader } from "components/Loader/Loader";
// import { useEffect } from "react";
// import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "redux/contacts/operations";
// import { selectContacts, selectError, selectIsLoading } from "redux/contacts/selectors";
// import { ContactsTitle } from "./CatalogPage.styled";

// export default function Contacts() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectIsLoading);
//   const error = useSelector(selectError);
//   const contacts = useSelector(selectContacts)

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <ContactForm />
//          {isLoading && !error && <Loader />}
//          {error && (toast.error('Oops! Something went wrong. Please try again later.'))}
//          {contacts.length > 0 ? (
//              <>
//                <ContactsTitle>Contacts list</ContactsTitle>
//                <Filter />
//                <ContactList />
//              </>
//             ) : null}
//     </>
//   );
// }

import { AutosList } from "components/AutosList/AutosList";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchAutos } from "redux/autos/operations";
import { selectAutos, selectError, selectIsLoading } from "redux/autos/selectors";


export default function Autos() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const autos = useSelector(selectAutos)

  useEffect(() => {
    dispatch(fetchAutos());
  }, [dispatch]);

  return (
    <>
         {isLoading && !error && <Loader />}
         {error && (toast.error('Oops! Something went wrong. Please try again later.'))}
         {autos.length > 0 ? (
             <>            
               <AutosList />
             </>
            ) : null}          
    </>
  );
}