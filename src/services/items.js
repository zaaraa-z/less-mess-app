const baseURL = 'htttp://localhost:3035/items';

const getCollectionURL = () => baseURL;

const getAllItems = async () => {
  const res = await fetch(getCollectionURL());
  const items = await res.json();
  return items;
};
