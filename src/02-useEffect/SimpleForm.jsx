import { useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "strider@gmail.com",
  });
  const { username, email } = formState;
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    ////console.log(name, value);
    return setFormState({ ...formState, [name]: value });
  };
  return (
    <>
      <h1>Formulario Simple</h1>
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
      { username==='strider' && <Message/>}
    </>
  );
};
