import React from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { MainPage } from './components/MainPage/MainPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
    </div>
  );
}

export default App;