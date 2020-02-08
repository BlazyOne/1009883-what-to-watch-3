import PropTypes from 'prop-types';

const PropValidator = {
  PROMO_FILM: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
  FILMS: PropTypes.arrayOf(PropTypes.string.isRequired),
  ON_TITLE_CLICK: PropTypes.func.isRequired
};

export {PropValidator};
