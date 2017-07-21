// @flow

import React, { Component } from 'react';

type Props = {
  children: React.Element<any>,
};

class App extends Component {
  props: Props
  render() {
    const { children } = this.props;
    return (
      <div>
        {React.Children.toArray(children)}
      </div>
    );
  }
}

export default App;

