import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import {AppRoute} from '../../const.js';

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.formRef = React.createRef();
    this.submitButtonRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(evt) {
    const {postReview, film: {id}, changeScreen, changeError} = this.props;
    const formData = new FormData(this.formRef.current);
    const rating = +formData.get(`rating`) * 2;
    const comment = formData.get(`review-text`);

    evt.preventDefault();

    this.formRef.current.disabled = true;

    const onError = (err) => {
      if (err) {
        changeError({
          status: err.status,
          message: err.message
        });
        this.formRef.current.disabled = false;
      } else {
        changeError(null);
        this.formRef.current.disabled = false;
      }
    };

    const onSuccess = () => {
      this.formRef.current.disabled = false;
      changeScreen(AppRoute.createParticularFilmUrl(id));
    };

    postReview(id, {rating, comment}, onSuccess, onError);
  }

  handleChange() {
    const formData = new FormData(this.formRef.current);
    const ratingValue = formData.get(`rating`);
    const textValue = formData.get(`review-text`);

    if (ratingValue && textValue.length >= 50 && textValue.length <= 400) {
      this.submitButtonRef.current.disabled = false;
    } else {
      this.submitButtonRef.current.disabled = true;
    }
  }

  render() {
    const {
      authInfo,
      film: {id, backgroundImage, title, poster},
      error,
      changeScreen
    } = this.props;
    const errorMessage = error ?
      `An error occured while uploading.${error.status ? ` Status: ${error.status}.` : ``} ${error.message ? ` Message: ${error.message}.` : ``}`
      : ``;

    return (<section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a
              href="main.html"
              className="logo__link"
              onClick={(evt) => {
                evt.preventDefault();

                changeScreen(AppRoute.MAIN);
              }}
            >
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a
                  href="movie-page.html"
                  className="breadcrumbs__link"
                  onClick={(evt) => {
                    evt.preventDefault();

                    changeScreen(AppRoute.createParticularFilmUrl(id));
                  }}
                >{title}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <div className="user-block">
            <div className="user-block__avatar">
              <img
                src={`https://htmlacademy-react-3.appspot.com/${authInfo.avatarUrl}`}
                alt="User avatar"
                width="63"
                height="63"
                onClick={() => {
                  changeScreen(AppRoute.MY_LIST);
                }}
              />
            </div>
          </div>
        </header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster} alt={`${title} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          ref={this.formRef}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <div className="rating">
            <div className="rating__stars">
              <input className="rating__input" id="star-1" type="radio" name="rating" value="1" />
              <label className="rating__label" htmlFor="star-1">Rating 1</label>

              <input className="rating__input" id="star-2" type="radio" name="rating" value="2" />
              <label className="rating__label" htmlFor="star-2">Rating 2</label>

              <input className="rating__input" id="star-3" type="radio" name="rating" value="3" defaultChecked />
              <label className="rating__label" htmlFor="star-3">Rating 3</label>

              <input className="rating__input" id="star-4" type="radio" name="rating" value="4" />
              <label className="rating__label" htmlFor="star-4">Rating 4</label>

              <input className="rating__input" id="star-5" type="radio" name="rating" value="5" />
              <label className="rating__label" htmlFor="star-5">Rating 5</label>
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" minLength={50} maxLength={400}></textarea>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit" ref={this.submitButtonRef}>Post</button>
            </div>

          </div>

          {error ?
            <p style={{color: `red`}}>{errorMessage}</p> :
            ``}
        </form>
      </div>

    </section>);
  }
}

AddReview.propTypes = {
  authInfo: PropValidator.AUTH_INFO,
  film: PropValidator.FILM,
  error: PropValidator.ERROR,
  changeScreen: PropValidator.CHANGE_SCREEN,
  postReview: PropValidator.POST_REVIEW,
  changeError: PropValidator.CHANGE_ERROR
};

export default AddReview;
