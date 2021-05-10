import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import Contact from './components/pages/Contact'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/Underdog-Grooming-React' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
