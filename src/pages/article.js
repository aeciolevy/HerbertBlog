import React, { Component } from 'react';
import NavBar from '../components/navbar';
import { Link } from 'react-router-dom';
import fakeArticle from '../db/article.json';


class Article extends Component {

  render(){
    const id = fakeArticle[0].id;
    return (
      <div>
        <NavBar />
        <div className="flex-button">
          <button className="flex-child" type="button">
            Logística <span className="badge">0</span>
          </button>
          <button className="flex-child" type="button">
            Liderança <span className="badge">1</span>
          </button>
          <button className="flex-child" type="button">
            PCM <span className="badge">0</span>
          </button>
        </div>
        <div className="col-md-6 col-md-offset-3 list-group">
          <Link to={`article/${id}`} className="list-group-item effect8">
            <h3 className="list-group-item-heading">{fakeArticle[0].title}</h3>
            <img src={fakeArticle[0].images} className="list-img" alt="img"/>
            <p className="list-group-item-text">
              Este post trata-se de uma continuação do post "Você é Resiliente ou Tenaz? ”, publicado no blog em 03/02/2017.
              Quem não desejaria ser imune às pressões do trabalho? Este deve ser o desejo de 10 em cada 10 líderes no mundo corporativo, esta “imunidade” seria análoga...
            </p>
          </Link>

        </div>
      </div>
    );
  }
}

export default Article;