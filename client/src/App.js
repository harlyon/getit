import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import EditJob from './pages/EditJob';
import Post from './pages/Post'
import Navbar from './components/Navbar';
import AllJobs from './pages/AllJobs';
import JobDetails from './pages/JobDetails';


function App() {
  return (
    <Router>
      <div id="home" className="hero-area">
       <Navbar />
        <Route exact path ="/" component={Main} />
        <Route exact path = "/login" component={Login} />
        <Route exact path="/post" component={Post} />
        <Route exact path = "/Boards/edit/:id" component={EditJob} />
        <Route exact path = "/jobs" component={AllJobs} />
        <Route exact path = "/Boards/:id" component={JobDetails} />
        <Footer />
      </div>
    </Router>

  );
}

export default App;
