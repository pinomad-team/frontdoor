import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { PylonRpc } from './api/pylon';
import { BaseServiceClientImpl, PingRequest } from './proto/idl/base/base_service';

const App: React.FC = () => {
  useEffect(() => {
    const pylonRpc = new PylonRpc();
    const client = new BaseServiceClientImpl(pylonRpc);
    client.ping({
      name: "hello"
    }).then((value) => {
      console.log(value);
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
