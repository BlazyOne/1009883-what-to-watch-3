import React, {PureComponent} from 'react';

const withTabs = (Component) => {
  class WithTabs extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        currentTab: `start`
      };
    }

    render() {
      const {currentTab} = this.state;

      return (
        <Component
          {...this.props}
          currentTab={currentTab}
          onTabChange={(tab) => {
            this.setState({
              currentTab: tab
            });
          }}
        />
      );
    }
  }

  return WithTabs;
};

export default withTabs;
