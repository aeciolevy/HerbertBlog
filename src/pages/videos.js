import React from 'react';
import NavBar from '../components/navbar';

const Videos = (props) => {

  const url = `https://www.youtube.com/embed/NpwcGyTo0UA`;

  return (
    <div>
      <NavBar />
        <div className="video-detail center-block">
          <div className ="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={url}></iframe>
          </div>
        </div>
    </div>
  );
}

export default Videos;