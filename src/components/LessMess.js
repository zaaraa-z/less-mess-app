import React, { useState } from 'react';
import { AppHeader } from './AppHeader';
import { LessMessTable } from './LessMessTable';
import { LessMessForm } from './LessMessForm';

// export const LessMess = (props) => {...  const [newItems, setNewItems] = useState(props.items.concat())
//destructuring:
export const LessMess = ({ items: initialItems }) => {
  const [newItems, setNewItems] = useState(initialItems.concat());

  const addItem = (outputDataFromLessMessFrom) => {
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
  };

  const deleteItem = (itemId) => {
    setNewItems(newItems.filter((item) => item.id !== itemId));
  };

  return (
    <>
      <AppHeader appHeaderText="LessMess!" appSlogan="Items I no longer need" />
      <LessMessTable itemsArr={newItems} onDeleteItem={deleteItem} />
      <LessMessForm btnText="Less Mess!" onSubmitItem={addItem} />
    </>
  );
};
