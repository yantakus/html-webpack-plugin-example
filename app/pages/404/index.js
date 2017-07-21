// @flow

import React, { Component } from 'react';

import Img from './404.png';

class FourOneFourPage extends Component {
  render() {
    return (
      <div>
        <div className="row column text-center">
          <img
            src={Img}
            alt="Lift 404 Page"
          />
        </div>
      </div>
    );
  }
}

export default FourOneFourPage;
