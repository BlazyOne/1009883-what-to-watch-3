import React from "react";
import {PropValidator} from '../../prop-validator/prop-validator.js';
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppRoute} from "../../const.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getAuthorizationCheckHappened, getAuthorizationStatus} from "../../reducer/user/selectors.js";


const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus, authorizationCheckHappened} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH || !authorizationCheckHappened
            ? render(routeProps)
            : <Redirect to={AppRoute.SIGN_IN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authorizationStatus: PropValidator.AUTHORIZATION_STATUS,
  exact: PropValidator.EXACT,
  path: PropValidator.PATH,
  render: PropValidator.RENDER,
  authorizationCheckHappened: PropValidator.AUTHORIZATION_CHECK_HAPPENED
};

const mapStateToProps = (state) => ({
  authorizationCheckHappened: getAuthorizationCheckHappened(state),
  authorizationStatus: getAuthorizationStatus(state),
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
