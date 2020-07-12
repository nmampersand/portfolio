import React from 'react';
import './App.css';
import avatar from './avatar.jpg';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="main">
        <img className="avatar" src={avatar} alt="pixelated avatar image of Nicole" />
        <h2>hi</h2>
        </div>
        <div className="nav">
          <div className="navText">about</div>
          <div className="navText">projects</div>
          <div className="navText">resume</div>
        </div>
      </div>
    </div>
  );
}

export default App;
