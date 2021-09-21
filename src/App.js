import React from 'react'
// import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    // <Homepage />
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
