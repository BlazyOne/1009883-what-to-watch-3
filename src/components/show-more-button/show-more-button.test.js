import React from 'react';
import renderer from 'react-test-renderer';
import ShowMoreButton from './show-more-button.jsx';

it(`Shold ShowMoreButton render correctly`, () => {
  const tree = renderer
    .create(<ShowMoreButton
      onIncrementShowed={() => {}}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
