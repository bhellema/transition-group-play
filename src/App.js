import React, { useState } from 'react';
import Transition from 'react-transition-group/Transition';
import cn from 'classnames';
import './App.css';

export const App = props => {
  const [bool, setBool] = useState(false);

  const toggle = () => {
    setBool(!bool);
  };

  return (
    <div>
      <button onClick={toggle}>Fade</button>
      <Transition in={bool} timeout={400}>
        {status => (
          <div className={cn('defaultStyle', status)}>
            {console.log(status)}
            <img src="https://images.pexels.com/photos/459793/pexels-photo-459793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          </div>
        )}
      </Transition>
    </div>
  );
};

export default App;
