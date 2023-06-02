import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './style.css';

const NewsletterSignupSchema = Yup.object().shape({
  email: Yup.string()
    .email('Nieprawidłowy adres e-mail')
    .required('Wymagane pole'),
});

function App() {
  const handleSubmit = (values) => {
    console.log(values.email);
  };

  return (
    <div className="App">
      <h1>Zapisz się do newslettera</h1>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={NewsletterSignupSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <label htmlFor="email">Adres e-mail:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" className="error" />
            <button type="submit">Zapisz się</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
