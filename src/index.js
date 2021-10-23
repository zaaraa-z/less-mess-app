import React from 'react';
import ReactDOM from 'react-dom';

import { LessMess } from './components/LessMess';

const itemsArr = [
  {
    id: 1,
    item: 'shirt',
    material: 'cotton',
    color: 'dark red',
    size: '40',
    quality: 'never used',
    goodFor: 'women',
    date: 2018,
    likeItBecause: 'it is cool',
    more: 'take care of it!',
  },
  {
    id: 2,
    item: 'mug',
    material: 'pottery',
    color: 'white',
    size: '9cm*13cm',
    quality: 'almost new',
    goodFor: 'hot drinks',
    date: 2015,
    likeItBecause: 'it is funny',
    more: 'nothing',
  },
];

ReactDOM.render(
  // React.createElement(LessMess),
  <LessMess items={itemsArr} />,
  document.getElementById('root')
);
