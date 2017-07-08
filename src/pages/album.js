import React, { Component } from 'react';
import NavBar from '../components/navbar';

import Thumbnail from '../components/thumbnail';

class Album extends Component {

  render() {
    return (
      <div>
        <NavBar />
        <Thumbnail />
      </div>
    );
  }
}

export default Album;