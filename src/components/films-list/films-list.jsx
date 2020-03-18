import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import FilmCard from '../film-card/film-card.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const FilmCardWrapped = withVideoPlayer(FilmCard);

class FilmsList extends PureComponent {
  render() {
    const {films, onTitleClick, changeScreen} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) =>
          <FilmCardWrapped
            key={`films_` + film.title + index}
            film={film}
            onTitleClick={onTitleClick}
            changeScreen={changeScreen}
          />
        )}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropValidator.FILMS,
  onTitleClick: PropValidator.ON_TITLE_CLICK,
  changeScreen: PropValidator.CHANGE_SCREEN
};

export default FilmsList;
