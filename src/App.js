import React, { useState } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import './App.css';

export const App = props => {
  const [contacts, setContacts] = useState(['Harry', 'Ron', 'Hermoine', 'Hagrid', 'Hedwig']);
  const [count, setCount] = useState(0);
  const [currentContact, setCurrentContact] = useState(undefined);

  const nextContact = () => {
    const l = contacts.length - 1;
    if (count !== l) {
      setCount(count + 1);
      setCurrentContact(contacts[count + 1]);
    } else {
      setCount(0);
      setCurrentContact(contacts[0]);
    }
  };

  return (
    <div>
      <TransitionGroup className="container">
        <CSSTransition in={true} appear={false} key={count} timeout={900} classNames="slide">
          <h1>{currentContact}</h1>
        </CSSTransition>
      </TransitionGroup>
      <div className="btn">
        <button onClick={nextContact}>next</button>
      </div>
    </div>
  );
};

export default App;
