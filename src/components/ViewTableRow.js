import React from 'react';
import PropTypes from 'prop-types';
import { itemsPropType } from '../propTypes/itemsPropType';

// EWG 10302021: Need to fix the casing of "ViewtableRow"
export const ViewtableRow = ({
  item,
  onDeleteItem: deleteItem,
  onEditItem: EditItem,
}) => {
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
      <td>{item.likeItBecause}</td>
      <td>{item.more}</td>
      <td>
        <button type="button" onClick={() => deleteItem(item.id)}>
          Delete
        </button>
        <button type="button" onClick={() => EditItem(item.id)}>
          Edit
        </button>
      </td>
    </tr>
  );
};

ViewtableRow.prototype = {
  item: itemsPropType.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
};
