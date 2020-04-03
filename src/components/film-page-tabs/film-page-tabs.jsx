import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import {FilmInfoTabTypes} from '../../const.js';

const STARRING_SHORT_LENGTH = 4;

const getRatingLevel = (ratingScore) => {
  const ratingScoreNumber = +ratingScore.replace(`,`, `.`);
  if (ratingScoreNumber >= 0 && ratingScoreNumber < 3) {
    return `Bad`;
  } else if (ratingScoreNumber >= 3 && ratingScoreNumber < 5) {
    return `Normal`;
  } else if (ratingScoreNumber >= 5 && ratingScoreNumber < 8) {
    return `Good`;
  } else if (ratingScoreNumber >= 8 && ratingScoreNumber < 10) {
    return `Very good`;
  } else if (ratingScoreNumber === 10) {
    return `Awesome`;
  }

  return ``;
};

class FilmPageTabs extends PureComponent {
  render() {
    const {
      film: {genre, year, ratingScore, ratingCount, description, director, starring, runTime, reviews},
      currentTab,
      onTabChange
    } = this.props;

    const ratingLevel = getRatingLevel(ratingScore);

    const overviewNavClassName = `movie-nav__item ` +
      (currentTab === `start` || currentTab === FilmInfoTabTypes.OVERVIEW ?
        `movie-nav__item--active` :
        ``);
    const detailsNavClassName = `movie-nav__item ` + ((currentTab === FilmInfoTabTypes.DETAILS) && `movie-nav__item--active`);
    const reviewsNavClassName = `movie-nav__item ` + ((currentTab === FilmInfoTabTypes.REVIEWS) && `movie-nav__item--active`);

    const starringShort = starring.slice(0, STARRING_SHORT_LENGTH);
    const starringShortString = starringShort.join(`, `) + ` and other`;
    const starringLong = starring.map((actor, index) => {
      return (
        <React.Fragment key={`starringLong` + index}>
          {actor}{index !== starring.length - 1 ?
            <React.Fragment>, <br /></React.Fragment> :
            ``}
        </React.Fragment>
      );
    });

    const renderReview = (review, index) => {
      const dateObject = new Date(review.date);
      const dateTime = `${dateObject.getFullYear()}-${dateObject.getMonth() + 1}-${dateObject.getDate()}`;

      return (
        <div className="review" key={`review` + index}>
          <blockquote className="review__quote">
            <p className="review__text">{review.message}</p>

            <footer className="review__details">
              <cite className="review__author">{review.author}</cite>
              <time className="review__date" dateTime={dateTime}>{review.date}</time>
            </footer>
          </blockquote>

          <div className="review__rating">{review.reviewRating}</div>
        </div>
      );
    };

    const reviewsSeparator = Math.ceil(reviews.length / 2);
    const reviewsFirstHalf = reviews.slice(0, reviewsSeparator).map(renderReview);
    const reviewsSecondHalf = reviews.slice(reviewsSeparator).map(renderReview);

    const renderTabContent = (tab) => {
      switch (tab) {
        case `start`:
        case FilmInfoTabTypes.OVERVIEW:
          return (
            <React.Fragment>
              <div className="movie-rating">
                <div className="movie-rating__score">{ratingScore}</div>
                <p className="movie-rating__meta">
                  <span className="movie-rating__level">{ratingLevel}</span>
                  <span className="movie-rating__count">{ratingCount}</span>
                </p>
              </div>

              <div className="movie-card__text">
                {description.split(`\n`).map((paragraph, index) =>
                  <p key={`descriptionParagraph` + index}>{paragraph}</p>
                )}

                <p className="movie-card__director"><strong>Director: {director}</strong></p>

                <p className="movie-card__starring"><strong>Starring: {starringShortString}</strong></p>
              </div>
            </React.Fragment>
          );
        case FilmInfoTabTypes.DETAILS:
          return (
            <React.Fragment>
              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      {starringLong}
                    </span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{runTime}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{year}</span>
                  </p>
                </div>
              </div>
            </React.Fragment>
          );
        case FilmInfoTabTypes.REVIEWS:
          return (
            <div className="movie-card__reviews movie-card__row">
              <div className="movie-card__reviews-col">
                {reviewsFirstHalf}
              </div>
              <div className="movie-card__reviews-col">
                {reviewsSecondHalf}
              </div>
            </div>
          );
      }
      return null;
    };

    return (
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={overviewNavClassName}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onTabChange(FilmInfoTabTypes.OVERVIEW);
                }}
              >
                Overview
              </a>
            </li>
            <li className={detailsNavClassName}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onTabChange(FilmInfoTabTypes.DETAILS);
                }}
              >
                Details
              </a>
            </li>
            <li className={reviewsNavClassName}>
              <a
                href="#"
                className="movie-nav__link"
                onClick={(evt) => {
                  evt.preventDefault();
                  onTabChange(FilmInfoTabTypes.REVIEWS);
                }}
              >
                Reviews
              </a>
            </li>
          </ul>
        </nav>

        {renderTabContent(currentTab)}

      </div>
    );
  }

  componentDidUpdate(prevProps) {
    const {
      film: {id},
      onTabChange
    } = this.props;

    if (id !== prevProps.film.id) {
      onTabChange(FilmInfoTabTypes.OVERVIEW);
    }
  }
}

FilmPageTabs.propTypes = {
  film: PropValidator.FILM,
  currentTab: PropValidator.CURRENT_TAB,
  onTabChange: PropValidator.ON_TAB_CHANGE
};

export default FilmPageTabs;
