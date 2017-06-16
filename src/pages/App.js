import React, { Component } from 'react';
import Navbar from '../components/navbar';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
  }


  render() {

    return (
      <div>
        <Navbar />
        <div className="jumbotron" >
          <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={900} >
          <img src={'https://static.wixstatic.com/media/f9ad96_675aac161e0043129b7f1b5a02a5f5c4~mv2.jpg/v1/fill/w_1036,h_498,al_c,lg_1,q_85/f9ad96_675aac161e0043129b7f1b5a02a5f5c4~mv2.webp'} className="img-responsive home-img" alt="foto" />
          <h5 className="article-title"> Como aumentar a sua Resiliência ?</h5>
          <Link to={`article/1`} >
            <button className=" btn btn-primary-outline"> Leia Mais </button>
          </Link>
        </CSSTransitionGroup>

        </div>
      </div>
    );
  }
}

export default App;
