import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PropValidator} from '../../prop-validator/prop-validator.js';
import withTabs from './with-tabs.jsx';

Enzyme.configure({
  adapter: new Adapter()
});

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

it(`Should change currentTab on click`, () => {
  const wrapper = mount(<MockComponentWrapped/>);

  expect(wrapper.instance().state.currentTab).toBe(`start`);

  wrapper.find(`li`).at(1).simulate(`click`);

  expect(wrapper.instance().state.currentTab).toBe(`details`);
});
