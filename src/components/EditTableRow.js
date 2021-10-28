import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { itemPropType } from '../propTypes/itemsPropType';

export class EditTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props.item,
    };

    this.defaultFocusedInputRef = createRef();

    this.change = this.change.bind(this);
    this.onSaveItem = this.saveItem.bind(this);
  }

  componentDidMount() {
    if (this.defaultFocusedInputRef.current) {
      this.defaultFocusedInputRef.current.focus();
    }
  }

  change({ target: { name, type, value } }) {
    this.SetState({
      [name]: type === 'number' ? Number(value) : value,
    });
  }

  saveItem() {
    this.props.onSaveItem({
      ...this.state,
      id: this.props.item.id,
    });
  }

  render() {
    return (
      <tr>
        <td>{this.props.item.id}</td>
        <td>
          <input
            id="edit-item-input"
            type="text"
            name="item"
            value={this.state.item}
            onChange={this.change}
            ref={this.defaultFocusedInputRef}
          />
        </td>
        <td>
          <input
            id="edit-material-input"
            type="text"
            name="material"
            value={this.state.material}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            id="edit-color-input"
            type="text"
            name="color"
            value={this.state.color}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            id="edit-size-input"
            type="text"
            name="size"
            value={this.state.size}
            onChange={this.change}
          />
        </td>
        <td>
          <select
            value={this.state.quality}
            onChange={this.change}
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
            value={this.state.goodFor}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            id="edit-date-input"
            type="number"
            name="date"
            value={this.state.date}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            id="edit-likeItBecause-input"
            type="text"
            name="likeItBecause"
            value={this.state.likeItBecause}
            onChange={this.change}
          />
        </td>
        <td>
          <input
            id="edit-more-input"
            type="text"
            name="more"
            value={this.state.more}
            onChange={this.change}
          />
        </td>

        <td>
          <button type="button" onClick={this.props.OncancelItem}>
            Cancel
          </button>
          <button type="button" onClick={this.saveItem}>
            Save
          </button>
        </td>
      </tr>
    );
  }
}

EditTableRow.propTypes = {
  item: itemPropType.isRequired,
  onSaveItem: PropTypes.func.isRequired,
  onCancelItem: PropTypes.func.isRequired,
};
