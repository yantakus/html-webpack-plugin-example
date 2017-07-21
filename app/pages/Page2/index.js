// @flow

import React, { Component } from 'react';
import { Link } from 'react-router';

class Page2 extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <p>Page 2</p>
      </div>
    );
  }
}

export default Page2;
