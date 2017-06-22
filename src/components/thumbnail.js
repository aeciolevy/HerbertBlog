import React from 'react';

const Thumbnail = (props) => {

  const handleClick = () => {
    props.handleClick()
  }



  return (
    <div className="flex-parent">
      <div className="flex-album-item">
        <div className="thumbnail" onClick={ handleClick } >
          <img src={`https://static.wixstatic.com/media/f9ad96_4342d3d6e8ca484fa7365d6cdf1ef4a2~mv2.jpg/v1/fill/w_1200,h_1200,q_85,usm_0.66_1.00_0.01/f9ad96_4342d3d6e8ca484fa7365d6cdf1ef4a2~mv2.jpg`} alt="..." className="img-album"/>
          <div className="caption">
            <h3> Palestra Raizen </h3>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Thumbnail;