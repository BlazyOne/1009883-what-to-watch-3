import PropTypes from 'prop-types';

const FILM = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  ratingScore: PropTypes.string.isRequired,
  ratingLevel: PropTypes.string.isRequired,
  ratingCount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired
};

const PropValidator = {
  PROMO_FILM: PropTypes.exact({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired
  }),
  FILMS: PropTypes.arrayOf(
      PropTypes.exact(FILM)
  ),
  FILM: PropTypes.exact(FILM),
  ON_TITLE_CLICK: PropTypes.func.isRequired,
  ON_CARD_CLICK: PropTypes.func.isRequired,
  ON_MOUSE_OVER_CARD: PropTypes.func.isRequired,
  IS_PLAYING: PropTypes.bool.isRequired,
  SRC: PropTypes.string.isRequired,
  WIDTH: PropTypes.string.isRequired,
  HEIGHT: PropTypes.string.isRequired,
  POSTER: PropTypes.string.isRequired,
  MUTED: PropTypes.bool.isRequired,
  STOP_ON_PAUSE: PropTypes.bool.isRequired,
  RENDER_VIDEO_PLAYER: PropTypes.func.isRequired,
  ON_START_PLAYING: PropTypes.func.isRequired,
  ON_STOP_PLAYING: PropTypes.func.isRequired
};

export {PropValidator};
