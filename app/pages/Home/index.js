// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Link to="/page2">Page 2</Link>
        <p>Home page</p>
      </div>
    );
  }
}

export default HomePage;
