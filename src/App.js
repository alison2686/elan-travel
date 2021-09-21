import React from 'react'
// import Homepage from './pages/Homepage'
// import Navbar from './components/Navbar'
// import Sidebar from './components/Sidebar';
import Home from './pages/index'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    // <Homepage />
    <Router>
      <Home />
    </Router>
  );
}

export default App;
