import React from 'react'
// import Homepage from './pages/Homepage'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar';
import Home from './pages'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

function App() {
  return (
    // <Homepage />
    <Router>
      <Home />
    </Router>
  );
}

export default App;
