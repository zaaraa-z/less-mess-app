const baseURL = 'http://localhost:3050/items';

const getCollectionURL = () => baseURL;

export const getAllItems = async () => {
  const res = await fetch(getCollectionURL());
  const items = await res.json();
  return items;
};
