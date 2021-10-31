import React, { useState, useCallback, useEffect } from 'react';
import { AppHeader } from './AppHeader';
import { LessMessTable } from './LessMessTable';
import { LessMessForm } from './LessMessForm';
import { useDefaultInputFocus } from '../hooks/useDefaultInputFocus';
import {
  getAllItems as returnAllItemsInDatabase,
  returnAddedItemToDatabase,
  returnEditedItemInDatabase,
  deleteItemInDatabase,
} from '../services/items';

//----------------------------------------------------------
//----------------------------------------------------------
export const LessMess = () => {
  const [newItems, setNewItems] = useState([]);
  const [editItemID, setEditItemID] = useState(-1);
  const defaultFocusedInputRef = useDefaultInputFocus();

  const resetAfterClickingCancel = useCallback(() => {
    setEditItemID(-1);
    if (defaultFocusedInputRef.current) {
      defaultFocusedInputRef.current.focus();
    }
  }, [defaultFocusedInputRef]);

  const updateCollectionDatabase = useCallback(() => {
      // EWG 10302021: for all callbacks that perform async
      // EWG 10302021: operations the promise should be returned
      // EWG 10302021: so the caller can chain off of it
      return returnAllItemsInDatabase().then((items) => {
        setNewItems(items);
        resetAfterClickingCancel();
      });
  }, [resetAfterClickingCancel]);

  //initialize items on the state after having retrieved them from actual service
  useEffect(() => {
    updateCollectionDatabase();
  }, [updateCollectionDatabase]);

  //form functions-----------------------------
  const addItem = useCallback(
    // EWG 10302021:"From" should probably be "Form" :)
    (outputDataFromLessMessFrom) => {
      // EWG 10302021: for all callbacks that perform async
      // EWG 10302021: operations the promise should be returned
      // EWG 10302021: so the caller can chain off of it
      return returnAddedItemToDatabase(outputDataFromLessMessFrom).then(
        updateCollectionDatabase
      );

      // ZZ solution1 to -infinity with the following spread operator:
      // if (newItems.length !== 0) {
      // setNewItems(
      //   newItems.concat({
      //     ...outputDataFromLessMessFrom,
      //     id: Math.max(0, ...newItems.map((c) => c.id)) + 1, //ZZ solution2 to -infinity with the spread operator:Math.max(0, ...)
      //   })
      // );
      // } else {
      //   setNewItems(
      //     newItems.concat({
      //       ...outputDataFromLessMessFrom,
      //       id: 1,
      //     })
      //   );
      // }
    },
    [updateCollectionDatabase]
  );

  const deleteItem = useCallback(
    (itemId) => {
      // EWG 10302021: for all callbacks that perform async
      // EWG 10302021: operations the promise should be returned
      // EWG 10302021: so the caller can chain off of it
      return deleteItemInDatabase(itemId).then(updateCollectionDatabase);
    },
    [updateCollectionDatabase]
  );

  // EWG 10302021: the suffix "Arr" is a little confusing
  // EWG 10302021: the plural "Items" is a little confusing too since only one item is being replaced 
  const replaceItemsArr = useCallback(
    (item) => {
      // EWG 10302021: for all callbacks that perform async
      // EWG 10302021: operations the promise should be returned
      // EWG 10302021: so the caller can chain off of it
      returnEditedItemInDatabase(item).then(updateCollectionDatabase);
    },
    [updateCollectionDatabase]
  );

  const cancelItem = useCallback(() => {
    resetAfterClickingCancel();
  }, [resetAfterClickingCancel]);

  //function return----------------------------
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
