import React, { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../hooks/useForm';

export const LessMessForm = memo(
  forwardRef(({ onSubmitItem, btnText }, ref) => {
    const [itemForm, change, resetItemForm] = useForm({
      item: '',
      material: '',
      color: '',
      size: '',
      quality: '',
      goodFor: '',
      date: 1900,
      likeItBecause: '',
      more: '',
    });

    const submitItem = () => {
      onSubmitItem({ ...itemForm });

      //reset the form
      resetItemForm();
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
            ref={ref}
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
          <label htmlFor="likeItBecause-input">Liked it because</label>
          <input
            type="text"
            id="likeItBecause-input"
            value={itemForm.likeItBecause}
            onChange={change}
            name="likeItBecause"
          ></input>
        </div>
        <div className="input-block">
          <label htmlFor="more-input">More</label>
          {/* EWG 10302021: consider making this a textarea, so it is easier to add more comments */}
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
  })
);

LessMessForm.defaultProps = {
  btnText: 'Submit',
};

LessMessForm.propTypes = {
  btnText: PropTypes.string,
  onSubmitItem: PropTypes.func.isRequired,
};
