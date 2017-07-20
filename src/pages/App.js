import React, { Component } from 'react';
import style from 'styled-components';
import { Keyframes, Frame } from 'react-keyframes';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import Navbar from '../components/navbar';
import db from '../db/article.json';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      classHide: false
    }
  }

  componentDidMount() {
    setTimeout(this.handleHidden.bind(this), 5000)
  }

  handleHidden() {
    this.setState({classHide: true })
  }


  render() {

    // const pictures = db.map( elem => {
    //   const img = elem.cover;
    //   const id = elem.id;
    //   const title = elem.title;

    //   return (
    //     <Carousel.Item key={id}>
    //       <Link to={`article/${id}`} >
    //         <img alt="900x500" src={img} className="img-responsive home-img"/>
    //         <Carousel.Caption>
    //             <h5 className="article-title"> {title} </h5>
    //         </Carousel.Caption>
    //       </Link>
    //     </Carousel.Item>
    //   );
    // })
    //       <CSSTransitionGroup
    //       transitionName="example"
    //       transitionAppear={true}
    //       transitionAppearTimeout={900} >

    //       <Carousel>
    //         {pictures}
    //         </Carousel>

    //     </CSSTransitionGroup>

    const articles = db.map( elem => {
      const img = elem.cover;
      const id = elem.id;

      return (
        <div className="flex-home-child">
          <Link to={`article/${id}`} >
            <Image src={img} style={{height: '180px', width: '170px', cursor: 'pointer'}} circle />
          </Link>
        </div>
      );
    })

    return (
      <div>
        <Navbar />
        <div className="jumbotron" >
         { this.state.classHide ?
          <div>
          <h2 style={{textAlign: 'center', padding: '40px 0 0 0', color:'beige'}}> Meus últimos artigos </h2>
          <div className="flex-home">
            {articles}
          </div>
          </div>
          :
          <div>
          <Keyframes component="h1"  className="title-page" >
            <Frame duration={500}>"Saudações </Frame>
            <Frame duration={500}>"Saudações a quem </Frame>
            <Frame duration={500}>"Saudações a quem tem</Frame>
            <Frame duration={500}>"Saudações a quem tem coragem"</Frame>
          </Keyframes>
          <img alt="900x500" src="https://scontent.fplu2-1.fna.fbcdn.net/v/t1.0-9/12552573_557747981044175_6630160594613650282_n.jpg?oh=6c5999cd258212d45b18687c3d34c4ea&oe=5A0054B7" className={`img-responsive picture`}/>
          </div>
        }

        </div>
      </div>
    );
  }
}

export default App;
