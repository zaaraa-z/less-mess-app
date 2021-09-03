import React, { useState } from 'react';
import { AppHeader } from './AppHeader';
import { LessMessTable } from './LessMessTable';
import { LessMessForm } from './LessMessForm';

// export const LessMess = (props) => {...  const [newItems, setNewItems] = useState(props.items.concat())
//destructuring:
export const LessMess = ({ items: initialItems }) => {
  const [newItems, setNewItems] = useState(initialItems.concat());

  const addItem = (outputDataFromLessMessFrom) => {
    setNewItems(
      newItems.concat({
        ...outputDataFromLessMessFrom,
        id: Math.max(...newItems.map((c) => c.id)) + 1,
      })
    );
  };

  return (
    <>
      <AppHeader appHeaderText="LessMess!" appSlogan="Items I no longer need" />
      <LessMessTable itemsArr={newItems} />
      <LessMessForm btnText="Less Mess..." onSubmitItem={addItem} />
    </>
  );
};
