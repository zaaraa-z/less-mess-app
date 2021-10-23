import { useState } from 'react';

export const useForm = (initialItems) => {
  const [form, setFrom] = useState({ initialItems });

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
      setFrom(initialItems);
    },
  ];
};
