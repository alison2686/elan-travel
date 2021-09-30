import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Home from './pages'
import SigninPage from './pages/signin'
import AboutPage from './pages/about'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/about' component={AboutPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
