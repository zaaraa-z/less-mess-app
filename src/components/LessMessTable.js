import React from 'react';
import propTypes from 'prop-types';
import { itemsPropType } from '../propTypes/itemsPropType';
import { ViewtableRow } from './ViewTableRow';

export const LessMessTable = ({
  itemsArr,
  onDeleteItem: deleteItem,
  onEditItem: editItem,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>
            <label htmlFor="edit-item-input">Item</label>
          </th>
          <th>
            <label htmlFor="edit-material-input">Material</label>
          </th>
          <th>
            <label htmlFor="edit-color-input">Color</label>
          </th>
          <th>
            <label htmlFor="edit-size-input">Size</label>
          </th>
          <th>
            <label htmlFor="edit-quality-select">Quality</label>
          </th>
          <th>
            <label htmlFor="edit-goodFor-input">Good for</label>
          </th>
          <th>
            <label htmlFor="edit-date-input">Date</label>
          </th>
          <th>
            <label htmlFor="edit-likedItBecause-input">Liked it because</label>
          </th>
          <th>
            <label htmlFor="edit-more-input">More</label>
          </th>
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
          <ViewtableRow
            item={item}
            key={item.id}
            onDeleteItem={deleteItem}
            onEditItem={editItem}
          />
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
  onEditItem: propTypes.func.isRequired,
};
