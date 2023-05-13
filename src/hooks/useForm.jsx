import { useState } from "react";

export const useForm = (initialForm = { }) => {
  const [formState, setFormState] = useState({ initialForm });
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    ////console.log(name, value);
    return setFormState({ ...formState, [name]: value });
  };
  const onResetForm = () => {
    return setFormState(initialForm);
  };
  return { ...formState, formState, onInputChange, onResetForm };
};
