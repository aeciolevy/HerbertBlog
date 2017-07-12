import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import db from '../db/article.json';

class App extends Component {
  constructor(props){
    super(props);
  }


  render() {

    const pictures = db.map( elem => {
      const img = elem.cover;
      const id = elem.id;
      const title = elem.title;
      // <img src={'https://static.wixstatic.com/media/f9ad96_675aac161e0043129b7f1b5a02a5f5c4~mv2.jpg/v1/fill/w_1036,h_498,al_c,lg_1,q_85/f9ad96_675aac161e0043129b7f1b5a02a5f5c4~mv2.webp'} className="img-responsive home-img" alt="foto" />
      // <button className=" btn btn-primary-outline"> Leia Mais </button>
      return (
        <Carousel.Item key={id}>
          <img alt="900x500" src={img} className="img-responsive home-img"/>
          <Carousel.Caption>
            <Link to={`article/${id}`} >
              <h5 className="article-title"> {title} </h5>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      );
    })


    return (
      <div>
        <Navbar />
        <div className="jumbotron" >
          <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={900} >

          <Carousel>
            {pictures}
            </Carousel>

        </CSSTransitionGroup>

        </div>
      </div>
    );
  }
}

export default App;
