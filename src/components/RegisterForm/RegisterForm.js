import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js"
import * as Yup from 'yup';
import { Formik } from "formik";
import { ContactFormButton, ContactFormError, ContactFormField, ContactFormForm, ContactFormLabel } from "components/ContactForm/ContactForm.styled.js";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must contain at least 2 characters')
    .max(40, 'Too long name')
    .required('Name is required!'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password is too long')
    .required('Password is required'),
  });

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    
     <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}

      onSubmit={(values, { resetForm }) => {
      dispatch(register(values));
      resetForm();
      }}
      validationSchema={validationSchema}
      >
        <ContactFormForm>
            <ContactFormLabel htmlFor="name">Name</ContactFormLabel>
              <ContactFormField id="name" type="text" name="name" placeholder="Jim Doun" autoComplete="on" />
              
              <ContactFormError name="name" component="div" />      
              
            <ContactFormLabel htmlFor="email">Email</ContactFormLabel>
              <ContactFormField id="email" type="email" name="email" placeholder="Email" autoComplete="on"  />
              
              <ContactFormError name="email" component="div" />
        
            <ContactFormLabel htmlFor="password">Password</ContactFormLabel>
              <ContactFormField id="password" type="password" name="password" placeholder="Password" autoComplete="off" />
              
              <ContactFormError name="password" component="div" />

            <ContactFormButton type="submit">Register</ContactFormButton>
        </ContactFormForm>
    </Formik>    
  );
};
