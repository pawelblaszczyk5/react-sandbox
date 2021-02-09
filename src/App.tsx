import React, {useState} from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {StateButton} from './components/StateButton/StateButton';
import {PropsButton} from './components/PropsButton/PropsButton';
import {DoSomething} from './components/DoSomething/DoSomething';
import {ContextTesting} from './components/ContextTesting/ContextTesting';
import {testContext} from './testContext';

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
      <DoSomething/>
      <testContext.Provider value={{color: '#fe9412'}}>
        <ContextTesting text="Very long and interesting text about something which should be orange"/>
      </testContext.Provider>
      <ContextTesting text="Very long and interesting text about something which should be green"/>
    </div>
  );
};

export default App;
