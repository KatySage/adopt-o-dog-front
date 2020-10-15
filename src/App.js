import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import DogList from './components/DogList'
import DogProfile from './components/DogProfile'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={DogList} />
        <Route path='/dog-profile/:dog_id?' component={DogProfile} />
      </Router>
    </div>
  );
}

export default App;
