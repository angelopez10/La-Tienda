import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterForm.css'

export default function RegisterForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Nombre Completo" name="Nombre Completo" ref={register({required: true, maxLength: 80})} />
      <input type="email" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
      <input type="text" placeholder="Dirección" name="Dirección" ref={register({required: true, maxLength: 22})} />
      <input type="number" placeholder="Telefono" name="Telefono" ref={register({required: true, max: 8, min: 8})} />
      <input type="text" placeholder="Contraseña" name="Contraseña" ref={register({required: true, max: 12, min: 8})} />
      <input type="text" placeholder="Confirmar Contraseña" name="Confirmar Contraseña" ref={register({required: true})} />

      <input type="submit" />
    </form>
  );
}