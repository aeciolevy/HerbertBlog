import React, { Component } from 'react';
import { connect } from 'react-redux';
import VideoListItem from './video-list-item';



const VideoList = (props) => {

  const videoItems = props.video.map( video => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onVideoClick={props.onVideoClick} />
      );
  })
  return (
      <ul className="col-md-4 list-group">
     {videoItems}
      </ul>
      );
  }


function mapStateToProps({ video }) {
  return { video };
}
export default connect(mapStateToProps)(VideoList);