import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import '../styles/App.css';

const Carousel = (props) => {
  return (
    <div>
      <CSSTransitionGroup
        transitionName="carousel"
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={300}>
        <img src={props.imageSrc} key={props.imageSrc} />
      </CSSTransitionGroup>
    </div>
  );
}

export default Carousel;