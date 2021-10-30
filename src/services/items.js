const baseURL = 'http://localhost:3050/items';

const getCollectionURL = () => baseURL;
const getCollectionItemURL = (itemID) =>
  `${getCollectionURL()}/${encodeURIComponent(itemID)}`;

export const getAllItems = async () => {
  const res = await fetch(getCollectionURL());
  const items = await res.json();
  //   return items;

  return new Promise((resolve) => setTimeout(() => resolve(items), 1000));
};

//set the functions
export const returnAddedItemToDatabase = async (item) => {
  const res = await fetch(getCollectionURL(), {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(item),
  });
  const addedItemToDatabase = await res.json();
  return addedItemToDatabase;
};

export const returnEditedItemInDatabase = async (item) => {
  const res = await fetch(getCollectionItemURL(item.id), {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(item),
  });
  const editedItemInDatabase = await res.json();
  return editedItemInDatabase;
};

export const deleteItemInDatabase = async (itemID) => {
  await fetch(getCollectionItemURL(itemID), {
    method: 'DELETE',
  });
};
