import React, {PureComponent} from 'react';

const withError = (Component) => {
  class WithError extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        error: null
      };
    }

    render() {
      const {error} = this.state;

      return (
        <Component
          {...this.props}
          error={error}
          changeError={(newError) => {
            this.setState({
              error: newError
            });
          }}
        />
      );
    }
  }

  return WithError;
};

export default withError;
