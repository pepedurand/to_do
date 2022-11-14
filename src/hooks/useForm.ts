import { ChangeEvent, useState } from "react";

export const useForm = (intialState: any) => {
  const [form, setForm] = useState(intialState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const cleanFields = () => {
    setForm(intialState);
  };
  return { form, onChange, cleanFields };
};
