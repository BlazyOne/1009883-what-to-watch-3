import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import {AppRoute} from '../../const.js';

const FilmCard = (props) => {
  const {
    film: {id, title, cardImage, videoPreview: videoSrc},
    onTitleClick,
    changeScreen,
    renderVideoPlayer,
    onStartPlaying,
    onStopPlaying
  } = props;

  let currentTimer;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={id}
      onMouseEnter={() => {
        currentTimer = setTimeout(onStartPlaying, 1000);
      }}
      onMouseLeave={() => {
        clearTimeout(currentTimer);
        onStopPlaying();
      }}
      onClick={() => {
        clearTimeout(currentTimer);
        changeScreen(AppRoute.createParticularFilmUrl(id));
      }}
    >
      <div
        className="small-movie-card__image"
      >
        {renderVideoPlayer({
          src: videoSrc,
          width: `280`,
          height: `175`,
          poster: cardImage,
          muted: true,
          looped: true,
          stopOnPause: true,
          videoClass: ``
        })}
      </div>
      <h3
        className="small-movie-card__title"
        onClick={onTitleClick}
      >
        <a
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {title}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropValidator.FILM,
  onTitleClick: PropValidator.ON_TITLE_CLICK,
  changeScreen: PropValidator.CHANGE_SCREEN,
  renderVideoPlayer: PropValidator.RENDER_VIDEO_PLAYER,
  onStartPlaying: PropValidator.ON_START_PLAYING,
  onStopPlaying: PropValidator.ON_STOP_PLAYING
};

export default FilmCard;
