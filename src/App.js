import React from 'react';
import {Navbar} from './components/Navbar/Navbar';
import {MainPage} from './components/MainPage/MainPage';
import {Slider} from './components/Slider/Slider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainPage />
      <Slider />
    </div>
  );
}

export default App;
