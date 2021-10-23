import React from './react';
import propTypes from './prop-types';
import { itemsPropType } from '../propTypes/itemsPropType';
import { ViewtableRow } from './ViewTableRow';

export const LessMessTable = ({ itemsArr, onDeleteItem: deleteItem }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Item</th>
          <th>Material</th>
          <th>Color</th>
          <th>Size</th>
          <th>Quality</th>
          <th>Good for</th>
          <th>Date</th>
          <th>Liked it because</th>
          <th>More</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {itemsArr.length === 0 && (
          <tr>
            <td colSpan="11">There are no items yet.</td>
          </tr>
        )}
        {itemsArr.map((item) => (
          <ViewtableRow item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
};

LessMessTable.defaultProps = {
  itemsArr: [],
};

LessMessTable.propTypes = {
  itemsArr: itemsPropType,
  onDeleteItem: propTypes.func.isRequired,
};
