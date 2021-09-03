import propTypes from 'prop-types';

export const itemPropType = propTypes.shape({
  id: propTypes.number,
  item: propTypes.string,
  material: propTypes.string,
  color: propTypes.string,
  size: propTypes.string,
  quality: propTypes.string,
  goodFor: propTypes.string,
  date: propTypes.number,
  likedItBecause: propTypes.string,
  more: propTypes.string,
});

export const itemsPropType = propTypes.arrayOf(itemPropType);
