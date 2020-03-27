import PropTypes from 'prop-types';

const FILM = {
  id: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  videoPreview: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  ratingScore: PropTypes.string.isRequired,
  ratingCount: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.arrayOf(PropTypes.string.isRequired),
  runTime: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.exact({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    reviewRating: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }))
};

const PropValidator = {
  FILMS: PropTypes.arrayOf(
      PropTypes.exact(FILM)
  ),
  FILM: PropTypes.exact(FILM),
  ON_TITLE_CLICK: PropTypes.func.isRequired,
  CHANGE_SCREEN: PropTypes.func.isRequired,
  IS_PLAYING: PropTypes.bool.isRequired,
  SRC: PropTypes.string.isRequired,
  WIDTH: PropTypes.string.isRequired,
  HEIGHT: PropTypes.string.isRequired,
  POSTER: PropTypes.string.isRequired,
  MUTED: PropTypes.bool.isRequired,
  LOOPED: PropTypes.bool.isRequired,
  STOP_ON_PAUSE: PropTypes.bool.isRequired,
  RENDER_VIDEO_PLAYER: PropTypes.func.isRequired,
  ON_START_PLAYING: PropTypes.func.isRequired,
  ON_STOP_PLAYING: PropTypes.func.isRequired,
  CURRENT_TAB: PropTypes.string.isRequired,
  ON_TAB_CHANGE: PropTypes.func.isRequired,
  GENRE: PropTypes.string.isRequired,
  ON_GENRE_CHANGE: PropTypes.func.isRequired,
  ON_INCREMENT_SHOWED: PropTypes.func.isRequired,
  SHOWED_FILMS_AMOUNT: PropTypes.number.isRequired,
  ON_TIME_UPDATE: PropTypes.func.isRequired,
  CLASS: PropTypes.string.isRequired,
  PROGRESS: PropTypes.number.isRequired,
  DURATION: PropTypes.number.isRequired,
  SET_VIDEO_DURATION: PropTypes.func.isRequired,
  AUTHORIZATION_STATUS: PropTypes.string.isRequired,
  LOGIN: PropTypes.func.isRequired,
  LOAD_REVIEWS_TO_FILM: PropTypes.func.isRequired,
  ON_SUBMIT: PropTypes.func.isRequired,
  AUTH_INFO: PropTypes.exact({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired
  })
};

export {PropValidator};
