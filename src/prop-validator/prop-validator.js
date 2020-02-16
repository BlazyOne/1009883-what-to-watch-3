import PropTypes from 'prop-types';

const PropValidator = {
  PROMO_FILM: PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
  FILMS: PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
      })
  ),
  FILM: PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  FILM_INFO: PropTypes.exact({
    id: PropTypes.string.isRequired,
    backgroundImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    ratingScore: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingCount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired
  }),
  ON_TITLE_CLICK: PropTypes.func.isRequired,
  ON_CARD_CLICK: PropTypes.func.isRequired,
  ON_MOUSE_OVER_CARD: PropTypes.func.isRequired
};

export {PropValidator};
