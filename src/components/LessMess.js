import React, { useState, useCallback } from 'react';
import { AppHeader } from './AppHeader';
import { LessMessTable } from './LessMessTable';
import { LessMessForm } from './LessMessForm';
import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';

// export const LessMess = (props) => {...  const [newItems, setNewItems] = useState(props.items.concat())
//destructuring:
export const LessMess = ({ items: initialItems }) => {
  const [newItems, setNewItems] = useState(initialItems.concat());
  const [editItemID, setEditItemID] = useState(-1);

  const defaultFocusedInputRef = useDefaultInputFocus();

  const addItem = useCallback(
    (outputDataFromLessMessFrom) => {
      // ZZ solution1 to -infinity with the following spread operator:
      // if (newItems.length !== 0) {
      setNewItems(
        newItems.concat({
          ...outputDataFromLessMessFrom,
          id: Math.max(0, ...newItems.map((c) => c.id)) + 1, //ZZ solution2 to -infinity with the spread operator:Math.max(0, ...)
        })
      );
      // } else {
      //   setNewItems(
      //     newItems.concat({
      //       ...outputDataFromLessMessFrom,
      //       id: 1,
      //     })
      //   );
      // }

      setEditItemID(-1);
    },
    [newItems]
  );

  const deleteItem = useCallback(
    (itemId) => {
      setNewItems(newItems.filter((item) => item.id !== itemId));

      setEditItemID(-1);
    },
    [newItems]
  );

  const replaceItemsArr = useCallback(
    (item) => {
      const newItemsArrBeingEdited = newItems.concat();
      const itemBeingEditedIndex = newItemsArrBeingEdited.findIndex(
        (i) => i.id === item.id
      );
      newItemsArrBeingEdited[itemBeingEditedIndex] = item;
      setNewItems(newItemsArrBeingEdited);

      setEditItemID(-1);
    },
    [newItems]
  );

  const cancelItem = useCallback(() => {
    setEditItemID(-1);
  }, []);

  return (
    <>
      <AppHeader appHeaderText="LessMess!" appSlogan="Items I no longer need" />
      <LessMessTable
        itemsArr={newItems}
        editItemID={editItemID}
        onDeleteItem={deleteItem}
        onEditItem={setEditItemID}
        onSaveItem={replaceItemsArr}
        onCancelItem={cancelItem}
      />
      <LessMessForm
        btnText="Less Mess!"
        onSubmitItem={addItem}
        ref={defaultFocusedInputRef}
      />
    </>
  );
};
