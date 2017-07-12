import React, { Component } from 'react';
import NavBar from '../components/navbar';
import fakeArticle from '../db/article.json';
import Preview from '../components/article-preview';

class Article extends Component {
  constructor(props){
    super(props)
    this.state = {
      article: fakeArticle
    };
  }

  handleClick = e => {
    let name = e.target.name
    let article = fakeArticle.reduce( (accu, current) => {
      if (current.tag === name){
        return accu.concat(current)
      }
      return accu
    }, []);
    this.setState({article});
  }

  render(){

    const log = fakeArticle.reduce( (accu, current) => current.tag === 'logistica' ? accu + 1:  accu + 0, 0);
    const lid = fakeArticle.reduce( (accu, current) => current.tag === 'lideranca' ? accu + 1:  accu + 0, 0);
    const pcm = fakeArticle.reduce( (accu, current) => current.tag === 'Planejamento e Controle da Manuntenção' ? accu + 1:  accu + 0, 0);

    return (
      <div>
        <NavBar />
        <div className="flex-button">
          <button className="flex-child" name="logistica" type="button" onClick={this.handleClick}>
            Logística <span className="badge">{log}</span>
          </button>
          <button className="flex-child" name="lideranca" type="button" onClick={this.handleClick}>
            Liderança <span className="badge">{lid}</span>
          </button>
          <button className="flex-child" name="Planejamento e Controle da Manuntenção" type="button" onClick={this.handleClick}>
            Planejamento e Controle da Manutenção <span className="badge">{pcm}</span>
          </button>
        </div>
        <Preview data={this.state.article} />
      </div>
    );
  }
}

export default Article;