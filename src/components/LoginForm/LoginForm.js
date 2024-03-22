import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import { Formik } from 'formik';
import { ContactFormButton, ContactFormError, ContactFormField, ContactFormForm, ContactFormLabel } from 'components/ContactForm/ContactForm.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required!'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(20, 'Password is too long')
    .required('Password is required'),
  });

export const LoginForm = () => {
  const dispatch = useDispatch();

    return (
       <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  }}
      validationSchema={validationSchema} 
    >
            <ContactFormForm>
                
            <ContactFormLabel htmlFor="email">Email</ContactFormLabel>
              <ContactFormField id="email" type="email" name="email" placeholder="Email" autoComplete="on"/>
              
              <ContactFormError name="email" component="div" />
        
            <ContactFormLabel htmlFor="password">Password</ContactFormLabel>
              <ContactFormField id="password" type="password" name="password" placeholder="Password" autoComplete="off"/>
              
              <ContactFormError name="password" component="div" />

            <ContactFormButton type="submit">Log In</ContactFormButton>
        </ContactFormForm>
    </Formik> 
  );
};




