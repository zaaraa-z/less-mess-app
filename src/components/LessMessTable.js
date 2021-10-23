import React from 'react';
import propTypes from 'prop-types';
import { itemsPropType } from '../propTypes/itemsPropType';
import { ViewtableRow } from './ViewTableRow';
import { editTableRow } from './EditTableRow';

export const LessMessTable = ({
  itemsArr,
  onDeleteItem: deleteItem,
  editItemId,
  onEditItem: editItem,
  onSaveItem: saveItem,
  onCancelItem: cancelItem,
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
        {itemsArr.map((item) =>
          item.id === editItemId ? (
            <editTableRow
              item={item}
              key={item.id}
              onSaveItem={saveItem}
              onCancelItem={cancelItem}
            />
          ) : (
            <ViewtableRow
              item={item}
              key={item.id}
              onDeleteItem={deleteItem}
              onEditItem={editItem}
            />
          )
        )}
      </tbody>
    </table>
  );
};

LessMessTable.defaultProps = {
  itemsArr: [],
  editItemId: -1,
};

LessMessTable.propTypes = {
  itemsArr: itemsPropType,
  editItemId: propTypes.number,
  onDeleteItem: propTypes.func.isRequired,
  onEditItem: propTypes.func.isRequired,
  onSaveItem: propTypes.func.isRequired,
  onCancelItem: propTypes.func.isRequired,
};
