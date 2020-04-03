import React, {PureComponent} from 'react';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import {AppRoute} from '../../const.js';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit, changeError} = this.props;

    evt.preventDefault();

    const onError = (err) => {
      if (err) {
        changeError({
          status: err.status,
          message: err.message
        });
      } else {
        changeError(null);
      }
    };

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    }, onError);
  }

  render() {
    const {error, changeScreen} = this.props;
    const errorMessage = error ?
      `An error occured while downloading.${error.status ? ` Status: ${error.status}.` : ``} ${error.message ? ` Message: ${error.message}.` : ``}`
      : ``;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
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

          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form
            action="#"
            className="sign-in__form"
            onSubmit={this.handleSubmit}
          >
            {error ?
              <div className="sign-in__message">
                <p>{errorMessage}</p>
              </div> :
              ``}
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" ref={this.loginRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" ref={this.passwordRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <footer className="page-footer">
          <div className="logo">
            <a
              href="main.html"
              className="logo__link logo__link--light"
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

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    );
  }
}

SignIn.propTypes = {
  onSubmit: PropValidator.ON_SUBMIT,
  error: PropValidator.ERROR,
  changeError: PropValidator.CHANGE_ERROR,
  changeScreen: PropValidator.CHANGE_SCREEN
};

export default SignIn;
