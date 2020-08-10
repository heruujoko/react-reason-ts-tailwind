import React from 'react';
import './App.css';
import { make as Banner } from './components/Banner/Banner.gen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner message={"Hello World"} title={"Welcome"}/>
      </header>
    </div>
  );
}

export default App;
