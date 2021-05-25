// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//

//zara
import React from 'react';
import ReactDOM from 'react-dom';

import { LessMess } from './components/LessMess';

const itemsList = [
  {
    id: 1,
    item: 'shirt',
    material: 'cotton',
    color: 'dark red',
    size: '40',
    quality: 'never used',
    goodFor: 'women',
    date: 2018,
    likedItBecause: 'it is cool',
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
    likedItBecause: 'it is funny',
    more: 'nothing',
  },
];

ReactDOM.render(
  // React.createElement(LessMess),
  <LessMess items={itemsList} />,
  document.getElementById('root')
);
