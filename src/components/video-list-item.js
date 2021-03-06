import React from 'react';

const VideoListItem = ({video, onVideoClick}) => {

  if (!video){
    return <div> Loading... </div>;
  }

  return (
    <li onClick={ () => onVideoClick(video)} className="list-group-item videos" >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={video.snippet.thumbnails.default.url}/>
        </div>

        <div className="media-body">
          <div className="media-heading"> {video.snippet.title} </div>
        </div>
      </div>
    </li>
    );
};

export default VideoListItem;