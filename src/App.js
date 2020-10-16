import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import DogList from './components/DogList'

function App() {
  return (
    <div className="App">
      <Router>
        <DogList />
      </Router>
    </div>
  );
}

export default App;
