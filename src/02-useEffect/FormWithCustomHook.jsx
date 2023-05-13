import { useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
 const {formState,onInputChange,onResetForm,username,email,password} = useForm({
  name:'',
  email: '',
  password: ''
 }
 );
 ////const {username,email,password} =formState;
  return (
    <>
      <h1>Formulario con Custom Hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={(event) => onInputChange(event)}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="email@gmail.com"
        name="email"
        value={email}
        onChange={(event) => onInputChange(event)}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={(event) => onInputChange(event)}
      />
     <button className="btn btn-primary mt-3" onClick={(event)=> onResetForm(event)}>Reset</button>
    </>
  );
};
