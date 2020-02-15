import React from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';

const FilmCard = (props) => {
  const {
    film: {id, title, image},
    onTitleClick,
    onMouseOverCard
  } = props;

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={id}
      onMouseOver={() => {
        onMouseOverCard(id);
      }}>
      <div className="small-movie-card__image">
        <img src={image} alt={title} width="280" height="175" />
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
  onMouseOverCard: PropValidator.ON_MOUSE_OVER_CARD
};

export default FilmCard;
