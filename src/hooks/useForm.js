import { useState } from 'react';

export const useForm = (initialForm) => {
  const [form, setFrom] = useState(initialForm);

  const change = ({ target: { name, type, value } }) => {
    setFrom({
      ...form,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  return [
    form,
    change,
    () => {
      setFrom(initialForm);
    },
  ];
};
