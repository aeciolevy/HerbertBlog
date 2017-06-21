import React from 'react';
import NavBar from '../components/navbar';

const Album = (props) => {

  return (
    <div>
      <NavBar />
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <img src={`https://static.wixstatic.com/media/f9ad96_4342d3d6e8ca484fa7365d6cdf1ef4a2~mv2.jpg/v1/fill/w_1200,h_1200,q_85,usm_0.66_1.00_0.01/f9ad96_4342d3d6e8ca484fa7365d6cdf1ef4a2~mv2.jpg`} alt="..." />
            <div className="caption">
              <h3>Album title</h3>
              <p>...</p>
              <p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">Album Title</h4>
            </div>
            <div className="modal-body">
              <p>One fine body&hellip;</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

}

export default Album;