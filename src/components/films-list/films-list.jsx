import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import FilmCard from '../film-card/film-card.jsx';

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
    const {films, onTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) =>
          <FilmCard
            key={`films` + index}
            film={film}
            onTitleClick={onTitleClick}
            onMouseOverCard={this._onMouseOverCard}
          />
        )}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropValidator.FILMS,
  onTitleClick: PropValidator.ON_TITLE_CLICK
};

export default FilmsList;
