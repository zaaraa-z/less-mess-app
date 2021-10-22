import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const LessMessForm = ({ onSubmitItem, btnText }) => {
  const [itemForm, SetItemForm] = useState({
    item: '',
    material: '',
    color: '',
    size: '',
    quality: '',
    goodFor: '',
    date: 1900,
    likedItBecause: '',
    more: '',
  });

  /* const change = (e) => {
  SetItemForm({
    ...itemForm,
    [e.target.name]:
      e.target.type === 'number' ? Number(e.target.value) : e.target.value,
  });
}; */
  //destructuring:
  const change = ({ target: { name, type, value } }) => {
    SetItemForm({
      ...itemForm,
      [name]: type === 'number' ? Number(value) : value,
    });
  };

  const submitItem = () => {
    onSubmitItem({ ...itemForm });

    //reset the form
    SetItemForm({
      item: '',
      material: '',
      color: '',
      size: '',
      quality: '',
      goodFor: '',
      date: 1900,
      likedItBecause: '',
      more: '',
    });
  };

  return (
    <form>
      <div className="input-block">
        <label htmlFor="item-input">Item</label>
        <input
          type="text"
          id="item-input"
          value={itemForm.item}
          onChange={change}
          name="item"
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="material-input">Material</label>
        <input
          type="text"
          id="material-input"
          value={itemForm.material}
          onChange={change}
          name="material"
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="color-input">Color</label>
        <input
          type="text"
          id="color-input"
          value={itemForm.color}
          onChange={change}
          name="color"
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="size-input">Size</label>
        <input
          type="text"
          id="size-input"
          value={itemForm.size}
          onChange={change}
          name="size"
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="quality-select">Quality</label>
        <select
          id="quality-select"
          value={itemForm.quality}
          onChange={change}
          name="quality"
        >
          <option>never used</option>
          <option>perfect</option>
          <option>good</option>
          <option>almost good</option>
          <option>bad</option>
        </select>
      </div>
      <div className="input-block">
        <label htmlFor="goodFor-input">Good for</label>
        <input
          type="text"
          id="goodFor-input"
          value={itemForm.goodFor}
          onChange={change}
          name="goodFor"
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="date-input">Date</label>
        <input
          type="number"
          id="date-input"
          value={itemForm.date}
          onChange={change}
          name="date"
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="likedItBecause-input">Liked it because</label>
        <input
          type="text"
          id="likedItBecause-input"
          value={itemForm.likedItBecause}
          onChange={change}
          name="likedItBecause"
        ></input>
      </div>
      <div className="input-block">
        <label htmlFor="more-input">More</label>
        <input
          type="text"
          id="more-input"
          value={itemForm.more}
          onChange={change}
          name="more"
        ></input>
      </div>

      <button type="button" id="submit-btn" onClick={submitItem}>
        {btnText}
      </button>
    </form>
  );
};

LessMessForm.defaultProps = {
  btnText: 'Submit',
};

LessMessForm.propTypes = {
  btnText: PropTypes.string,
  onSubmitItem: PropTypes.func.isRequired,
};
