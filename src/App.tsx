import React from 'react';
import './App.css';
import { make as Banner } from './components/Banner/Banner.gen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner message={"Hello World. This is a message from used by ReasonML COOL!"} title={"Welcome"} bannerType={"Success"}/>
        <Banner message={"Hello World. This is a message from used by ReasonML COOL!"} title={"Welcome"} bannerType={"Info"}/>
        <Banner message={"Hello World. This is a message from used by ReasonML COOL!"} title={"Welcome"} bannerType={"Warning"}/>
        <Banner message={"Hello World. This is a message from used by ReasonML COOL!"} title={"Welcome"} bannerType={"Danger"}/>
      </header>
    </div>
  );
}

export default App;
