import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';
import {AuthorizationStatus} from '../../reducer/user/user.js';

const noop = () => {};

it(`Should SignIn render correctly`, () => {
  const tree = renderer.create(
      <SignIn
        authorizationStatus={AuthorizationStatus.NO_AUTH}
        onSubmit={noop}
        changeScreen={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
