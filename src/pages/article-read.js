import React, { Component } from 'react';
import NavBar from '../components/navbar';
import articleData from '../db/article';
import _ from 'lodash';

class ArticleRead extends Component {
  constructor(props){
    super(props);
  }

  articleID() {
    return this.props.match.params.articleId;
  }

  render(){

    const article = _.find(articleData, obj => obj.id == this.articleID())

    return (
      <div>
        <NavBar />
        <div className="big-container">
          <main>
            <h2> {article.title} </h2>
            <p className="date-smaller"> 02/03/2017 | Herbert Ricardo Viana Garcia </p>
            <article>
              {article.content1}
            </article>
            <img src={`https://static.wixstatic.com/media/f9ad96_a6b584cf33d848149598eac4cf17c3f5~mv2.png/v1/fill/w_960,h_540,al_c/f9ad96_a6b584cf33d848149598eac4cf17c3f5~mv2.png`} alt="First" className="img-responsive img-1" />
            <article>
              {article.content2}
            </article>
            <img src={article.images} alt="Second" className="img-responsive img-2" />
          </main>
        </div>
      </div>
    );
  }
}

export default ArticleRead