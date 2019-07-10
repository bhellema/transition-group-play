import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import './Slide.css';

export const Slide = ({ count, children }) => {
  return (
    <TransitionGroup className="container">
      <CSSTransition in={true} appear={false} key={count} timeout={900} classNames="slide">
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};
