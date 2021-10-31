import { useState } from 'react';

export const useForm = (initialForm) => {
  const [form, setFrom] = useState(initialForm);

  const change = ({ target: { name, type, value } }) => {
    setFrom({
      ...form,
      // EWG 10302021: Number works but I have found that parseInt or parseFloat works better
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
