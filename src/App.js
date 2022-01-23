import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router,
   Routes, Route } from 'react-router-dom';
/* import Search from './Search'; */
import SearchPage from './SearchPage';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>         
          <Route path='/' element={ <Home />} />
          <Route path='/search' element={ <SearchPage />}/>          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
