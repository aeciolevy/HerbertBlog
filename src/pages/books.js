import React from 'react';
import NavBar from '../components/navbar';

const Books = (props) => {

  return (
    <div>
      <NavBar />
      <div className="row">
        <div className="col-sm-4">
          <img src={`https://static.wixstatic.com/media/f9ad96_7e9f583d8f8145d3acc2e70c760f2bc1~mv2.png/v1/fill/w_420,h_599,al_c,lg_1/f9ad96_7e9f583d8f8145d3acc2e70c760f2bc1~mv2.png`} alt="First book" className="img-resposive book1 center-block" />
        </div>
        <div className="col-sm-4">
          <img src={`https://static.wixstatic.com/media/f9ad96_c907253fc8f64475bad80c2751f5abe2~mv2.png/v1/fill/w_564,h_856,al_c,usm_0.66_1.00_0.01/f9ad96_c907253fc8f64475bad80c2751f5abe2~mv2.png`} alt="Second book" className="img-resposive book2 center-block" />
        </div>
        <div className="col-sm-4">
          <img src={`https://static.wixstatic.com/media/f9ad96_dc52b345503643ca9b0407915d81fffb~mv2.png/v1/fill/w_420,h_602,al_c,lg_1/f9ad96_dc52b345503643ca9b0407915d81fffb~mv2.png`} alt="Third book" className="img-resposive book3 center-block" />
        </div>
      </div>
    </div>
  );
}

export default Books;