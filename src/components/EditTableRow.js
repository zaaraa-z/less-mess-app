import React from 'react';
import PropTypes from 'prop-types';
import { itemsPropType } from '../propTypes/itemsPropType';
import { useForm } from '../hooks/useForm';

export const EditTableRow = ({
  item,
  onSaveItem,
  onCalcelItem: cancelItem,
}) => {
  const [itemForm, change] = useForm({ ...item });

  const saveItem = () => {
    onSaveItem({
      ...itemForm,
      id: item.id,
    });
  };

  return (
    <tr>
      <td>{item.id}</td>
      <td>
        <input
          id="edit-item-input"
          type="text"
          name="item"
          value={itemForm.item}
          onChange={change}
        />
      </td>
      <td>
        <input
          id="edit-material-input"
          type="text"
          name="material"
          value={itemForm.material}
          onChange={change}
        />
      </td>
      <td>
        <input
          id="edit-color-input"
          type="text"
          name="color"
          value={itemForm.color}
          onChange={change}
        />
      </td>
      <td>
        <input
          id="edit-size-input"
          type="text"
          name="size"
          value={itemForm.size}
          onChange={change}
        />
      </td>
      <td>
        <select
          value={itemForm.quality}
          onChange={change}
          name="quality"
          id="edit-quality-select"
        >
          <option>never used</option>
          <option>perfect</option>
          <option>good</option>
          <option>almost good</option>
          <option>bad</option>
        </select>
      </td>
      <td>
        <input
          id="edit-goodFor-input"
          type="text"
          name="goodFor"
          value={itemForm.goodFor}
          onChange={change}
        />
      </td>
      <td>
        <input
          id="edit-date-input"
          type="number"
          name="date"
          value={itemForm.date}
          onChange={change}
        />
      </td>
      <td>
        <input
          id="edit-likedItBecause-input"
          type="text"
          name="likeItBecause"
          value={itemForm.likedItBecause}
          onChange={change}
        />
      </td>
      <td>
        <input
          id="edit-more-input"
          type="text"
          name="more"
          value={itemForm.more}
          onChange={change}
        />
      </td>

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
  onCalcelItem: PropTypes.func.isRequired,
};
