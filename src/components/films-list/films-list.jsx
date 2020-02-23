import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import FilmCard from '../film-card/film-card.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const FilmCardWrapped = withVideoPlayer(FilmCard);

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCardId: null
    };

    this._onMouseOverCard = this._onMouseOverCard.bind(this);
  }

  _onMouseOverCard(id) {
    this.setState({
      activeCardId: id
    });
  }

  render() {
    const {films, onTitleClick, onCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) =>
          <FilmCardWrapped
            key={`films` + index}
            film={film}
            onTitleClick={onTitleClick}
            onCardClick={onCardClick}
            onMouseOverCard={this._onMouseOverCard}
          />
        )}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropValidator.FILMS,
  onTitleClick: PropValidator.ON_TITLE_CLICK,
  onCardClick: PropValidator.ON_CARD_CLICK
};

export default FilmsList;
