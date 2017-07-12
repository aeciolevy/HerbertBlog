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
    const articleContent = article.content.map( obj => {
      const text = obj.text;
      const img = obj.img;
      return (
        <div key={img}>
        <article>
        {text.map( (elem, index) => {
          return (
            <span key={index}>
              {elem}
              <br />
            </span>
          );
          })
        }
        </article>
        {img ? <img src={img} alt="First" className="img-responsive img-1" /> : null}
        </div>
      );
    })

    return (
      <div>
        <NavBar />
        <div className="big-container">
          <main>
            <h2> {article.title} </h2>
            <p className="date-smaller"> {article.date}  </p>
            {articleContent}
          </main>
        </div>
      </div>
    );
  }
}

export default ArticleRead