import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div> videoDetails </div>;
  }

  const videoID = video.id
  const url = `https://www.youtube.com/embed/${videoID}`;
  return (
    <div className="video-detail col-sm-8">
      <div className ="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}> </iframe>
      </div>
      <div className="details">
        <h4> {video.snippet.title} </h4>
        <div> {video.snippet.description} </div>
      </div>
    </div>
  );

}

export default VideoDetail;