import React, {PureComponent} from "react";
import {PropValidator} from '../../prop-validator/prop-validator.js';
import {Route} from "react-router-dom";
import {AppRoute} from "../../const.js";

class PrivateRoute extends PureComponent {
  render() {
    const {render, path, exact, redirectScreen, api} = this.props;

    return (
      <Route
        path={path}
        exact={exact}
        render={() => {
          api.get(`/login`).catch(() => {
            redirectScreen(AppRoute.SIGN_IN);
          });

          return (
            render()
          );
        }}
      />
    );
  }
}

PrivateRoute.propTypes = {
  exact: PropValidator.EXACT,
  path: PropValidator.PATH,
  render: PropValidator.RENDER,
  redirectScreen: PropValidator.REDIRECT_SCREEN,
  api: PropValidator.API
};

export default PrivateRoute;
