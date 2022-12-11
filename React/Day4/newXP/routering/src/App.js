import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, NavLink, Link } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import HomeScreen from './components/home';
import ProfileScreen from './components/profile';
import ShopScreen from './components/shop';
import PostList from './components/PostList';
import Example1 from './components/Example1';
import Example2 from './components/Example2';
import Example3 from './components/Example3';

const lstyle = {
  color: 'white',
  textdecoration: 'none',
  margin: '5px'
};

const App = () => (
  <>
  <Router>
    <div className="container">
      <nav className="nav nav-pills">
        <NavLink className="nav-link" activeClassName="active">
          <Link style={lstyle} to="/">Home</Link>
          <Link style={lstyle} to="/profile">Profile</Link>
          <Link style={lstyle} to="/shop">Shop</Link>
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={(
          <>
          <ErrorBoundary>
            <HomeScreen />
          </ErrorBoundary>
          </>
        )}
        />
        <Route path="/profile" element={(
          <ErrorBoundary>
            <ProfileScreen />
          </ErrorBoundary>
        )}
        />
        <Route path="/shop" element={(
          <ErrorBoundary>
            <ShopScreen />
          </ErrorBoundary>
        )}
        />
      </Routes>
    </div>
    <PostList />
    <Example1 />
    <Example2 />
    <Example3 />
   
  </Router>
   <button onClick={fetchData}>
      POST request using fetch with async/await
    </button>
  </>
);

const fetchData = async () => {
  // POST request using fetch with async/await
  const requestOptions = {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    })
  };

  try {
  const response = await fetch('https://webhook.site/7e2003da-51a0-48de-b528-0e1ddee14892', requestOptions);
  const data = await response.json();
    console.log(data);
    return data
} catch (e) {
  return e;
}
}


export default App;
