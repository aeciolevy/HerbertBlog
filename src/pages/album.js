import React, { Component } from 'react';
import NavBar from '../components/navbar';
import AlbumModal from '../components/album-modal';
import Thumbnail from '../components/thumbnail';

class Album extends Component {
  constructor(props){
    super(props)
    this.state = {
      showModal: false
    }

  }

  openModal = () => {
    this.setState({
      showModal: true
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Thumbnail handleClick={this.openModal} />
        <AlbumModal  open={this.state.showModal} close={ () => {this.setState({showModal: false})} } />
      </div>
    );
  }
}

export default Album;