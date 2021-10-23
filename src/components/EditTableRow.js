import React from 'react';
import PropTypes from 'prop-types';
import { itemsPropType } from '../propTypes/itemsPropType';

export const EditTableRow = ({
  item,
  onSaveItem,
  oncalcelItem: cancelItem,
}) => {
  const saveItem = () => {
    //call onSaveItem
  };

  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.item}</td>
      <td>{item.material}</td>
      <td>{item.color}</td>
      <td>{item.size}</td>
      <td>{item.quality}</td>
      <td>{item.goodFor}</td>
      <td>{item.date}</td>
      <td>{item.likedItBecause}</td>
      <td>{item.more}</td>
      <td>
        <button type="button" onClick={cancelItem}>
          Cancel
        </button>
        <button type="button" onClick={saveItem}>
          Save
        </button>
      </td>
    </tr>
  );
};

EditTableRow.propTypes = {
  item: itemsPropType.isRequired,
  onSaveItem: PropTypes.func.isRequired,
  oncalcelItem: PropTypes.func.isRequired,
};
