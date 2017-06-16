import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';


import App from './pages/App';
import About from './pages/about';
import Article from './pages/article';
import ArticleRead from './pages/article-read';
import Books from './pages/books';
import Videos from './pages/videos';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/article/:articleId" component={ArticleRead} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/videos" component={Videos} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
