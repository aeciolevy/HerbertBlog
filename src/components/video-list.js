import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from './video-list-item';



class VideoList extends Component {

render() {
  const videoItems = this.props.video.map( video => {
    console.log(video)
    return (
      <VideoListItem
       key={video.etag}
        video={video} />
      );
  })
  return (
      <ul className="col-md-4 list-group">
     {videoItems}
      </ul>
      );
  }
}

function mapStateToProps({ video }) {
  return { video };
}
export default connect(mapStateToProps)(VideoList);