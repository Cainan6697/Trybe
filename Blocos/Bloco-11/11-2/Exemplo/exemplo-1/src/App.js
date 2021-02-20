import React from 'react';

import './App.css';

import { bikes } from './data';
import Navbar from './components/Navbar';
import BikeList from './components/BikeList';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <BikeList bikes = { bikes } />  
    </div>
  );
}

export default App;
