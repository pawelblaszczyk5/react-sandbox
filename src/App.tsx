import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {StateButton} from './components/StateButton/StateButton';
import {PropsButton} from './components/PropsButton/PropsButton';

const App = () => {
  const [propsCount, setPropsCount] = useState(0);

  const setSomething = () => {
    setPropsCount(propsCount + 1);
  };

  return (
    <div className="App">
      <Header color="steelblue">
        React-sandbox
      </Header>
      <StateButton initialCount={5} initialIterator={3}/>
      <PropsButton value={propsCount} click={setSomething}/>
    </div>
  );
};

export default App;
