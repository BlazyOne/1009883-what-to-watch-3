import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';

const ShowMoreButton = (props) => {
  const {onIncrementShowed} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onIncrementShowed}>Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onIncrementShowed: PropValidator.ON_INCREMENT_SHOWED
};

export default ShowMoreButton;
