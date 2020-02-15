import PropTypes from 'prop-types';

const PropValidator = {
  PROMO_FILM: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
  FILMS: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ),
  FILM: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  ON_TITLE_CLICK: PropTypes.func.isRequired,
  ON_MOUSE_OVER_CARD: PropTypes.func.isRequired
};

export {PropValidator};
