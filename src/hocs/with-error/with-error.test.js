import React from 'react';
import renderer from 'react-test-renderer';
import withError from './with-error.jsx';
import {PropValidator} from '../../prop-validator/prop-validator.js';

const MockComponent = (props) => {
  const {error} = props;
  const errorMessage = error ?
    `An error occured while downloading.${error.status ? ` Status: ${error.status}.` : ``} ${error.message ? ` Message: ${error.message}.` : ``}`
    : ``;

  return (
    <div>
      {error ?
        <div className="sign-in__message">
          <p>{errorMessage}</p>
        </div> :
        ``}
    </div>
  );
};

MockComponent.propTypes = {
  error: PropValidator.ERROR,
  changeError: PropValidator.CHANGE_ERROR
};

const MockComponentWrapped = withError(MockComponent);

it(`Should withTabs render correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
