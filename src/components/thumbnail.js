import React, { Component } from 'react';
import Pictures from "../db/mural.json";
import AlbumModal from './album-modal';
import _ from 'lodash';

class Thumbnail extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  handleClick(e) {
    let element = e.currentTarget.children[0].childNodes[0];
    this.setState({
      pictureID: element.id
    });
    this.setState({
      showModal: true
    })
  }

  get getPictures() {
    let picture = _.find(Pictures, {id: Number(this.state.pictureID)})
    return picture;
  }

    render(){
      const items = Pictures.map( obj => {
        const cover = obj.cover;
        const title = obj.title;
        const id = obj.id;
        return (
          <div key={id} className="flex-album-item" onClick={ this.handleClick.bind(this) } >
            <div className="thumbnail" >
              <img src={cover} alt="..." className="img-album" id={id}/>
              <div className="caption">
                <h3> {title} </h3>
              </div>
            </div>
          </div>
        );
      });

      return (
        <div className="flex-parent">
          {items}
        <AlbumModal  picture={this.getPictures} open={this.state.showModal} close={ () => {this.setState({showModal: false})} } />
        </div>
      );
    }
}


export default Thumbnail;