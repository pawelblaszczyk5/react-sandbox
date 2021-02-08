import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {StateButton} from './components/StateButton/StateButton';

const App = () => (
  <div className="App">
    <Header color="steelblue">
      React-sandbox
    </Header>
    <StateButton initialCount={5} initialIterator={3}/>
  </div>
);

export default App;
