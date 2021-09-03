import React from 'react';
import { itemsPropType } from '../propTypes/itemsPropType';

export const LessMessTable = ({ itemsArr }) => {
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
        </tr>
      </thead>

      <tbody>
        {itemsArr.length === 0 && (
          <tr>
            <td colSpan="10">There are no items yet.</td>
          </tr>
        )}
        {itemsArr.map((item) => (
          <tr key={item.id}>
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
          </tr>
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
};
