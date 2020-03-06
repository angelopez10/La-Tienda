import React from 'react';
import { useForm } from 'react-hook-form';
import './RegistrationFormCss.css';

export default function RegistrationForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="full name" name="full name" ref={register} />
      <input type="text" placeholder="Direccion" name="Direccion" ref={register} />
      <input type="text" placeholder="Rif" name="Rif" ref={register} />
      <input type="email" placeholder="Email" name="Email" ref={register} />

      <input type="submit" />
    </form>
  );
}