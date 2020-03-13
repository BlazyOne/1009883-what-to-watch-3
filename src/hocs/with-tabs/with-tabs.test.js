import React from 'react';
import renderer from 'react-test-renderer';
import withTabs from './with-tabs.jsx';
import {PropValidator} from '../../prop-validator/prop-validator.js';

const MockComponent = (props) => {
  const {currentTab, onTabChange} = props;

  return (
    <ul>
      <li
        className={currentTab === `overview` || currentTab === `start` ?
          `active` :
          ``}
        onClick={() => {
          onTabChange(`overview`);
        }}
      >
        Overview
      </li>
      <li
        className={currentTab === `details` ?
          `active` :
          ``}
        onClick={() => {
          onTabChange(`details`);
        }}
      >
        Details
      </li>
    </ul>
  );
};

MockComponent.propTypes = {
  currentTab: PropValidator.CURRENT_TAB,
  onTabChange: PropValidator.ON_TAB_CHANGE
};

const MockComponentWrapped = withTabs(MockComponent);

it(`Should withTabs render correctly`, () => {
  const tree = renderer.create(
      <MockComponentWrapped/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
