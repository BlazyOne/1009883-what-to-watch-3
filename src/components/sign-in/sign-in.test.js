import React from 'react';
import renderer from 'react-test-renderer';
import SignIn from './sign-in.jsx';

const noop = () => {};

it(`Should SignIn render correctly without error`, () => {
  const tree = renderer.create(
      <SignIn
        onSubmit={noop}
        error={null}
        changeError={noop}
        changeScreen={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should SignIn render correctly with error`, () => {
  const tree = renderer.create(
      <SignIn
        onSubmit={noop}
        error={{message: `message`, status: 400}}
        changeError={noop}
        changeScreen={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
