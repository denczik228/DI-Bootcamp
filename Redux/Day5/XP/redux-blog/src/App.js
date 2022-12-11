import React, { Component } from 'react'
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import  Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Post from './components/Post';


export class App extends Component {
  render() {
    return (
    <>
      <Router>
      
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/> 
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/post' element={<Post/>}/>
          </Routes>
      
    </Router>
    </>
      
    )
  }
}
