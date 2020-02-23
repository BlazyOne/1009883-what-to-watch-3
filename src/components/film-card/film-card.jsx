import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';

const FilmCard = (props) => {
  const {
    film: {id, title, cardImage, video: videoSrc},
    onTitleClick,
    onCardClick,
    onMouseOverCard,
    renderVideoPlayer,
    onStartPlaying,
    onStopPlaying
  } = props;

  let currentTimer;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={id}
      onMouseOver={() => {
        onMouseOverCard(id);
        currentTimer = setTimeout(onStartPlaying, 1000);
      }}
      onMouseOut={() => {
        clearTimeout(currentTimer);
        onStopPlaying();
      }}
      onClick={() => {
        onCardClick(id);
      }}>
      <div className="small-movie-card__image">
        {renderVideoPlayer({
          src: videoSrc,
          width: `280`,
          height: `175`,
          poster: cardImage,
          muted: true,
          stopOnPause: true
        })}
      </div>
      <h3 className="small-movie-card__title" onClick={onTitleClick}>
        <a className="small-movie-card__link" href="movie-page.html">{title}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropValidator.FILM,
  onTitleClick: PropValidator.ON_TITLE_CLICK,
  onCardClick: PropValidator.ON_CARD_CLICK,
  onMouseOverCard: PropValidator.ON_MOUSE_OVER_CARD,
  renderVideoPlayer: PropValidator.RENDER_VIDEO_PLAYER,
  onStartPlaying: PropValidator.ON_START_PLAYING,
  onStopPlaying: PropValidator.ON_STOP_PLAYING
};

export default FilmCard;
