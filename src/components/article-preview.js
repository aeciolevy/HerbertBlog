import React from 'react';
import { Link } from 'react-router-dom';

const Preview = (props) => {
  let articles = props.data.map( obj => {
    const id = obj.id;
    const title = obj.title
    const img = obj.content[0].img;
    const text = obj.content[0].text.join();
    const summary = text.substring(0, 250);

    return (
      <div className="flex-preview-child" key={id}>
        <Link to={`/article/${id}`} className="list-group-item effect8">
          <h3 className="list-group-item-heading">{title}</h3>
          <img src={img} className="list-img" alt="img"/>
          <p className="list-group-item-text">
          {summary}
          </p>
        </Link>
      </div>
    );
  })


  return (
    <div className='flex-preview-parent'>
      {articles}
    </div>
  );


}

export default Preview;