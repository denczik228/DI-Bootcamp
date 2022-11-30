import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BuggyCounter from './App';
import ErrorBoundary from './ErrorBoundary';

import reportWebVitals from './reportWebVitals';
import { Color } from './Color';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    //first simul
    <div>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <BuggyCounter />
    </div>
  //second simul
    <div>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>
    </div>
    //third one
    <div>
      <ErrorBoundary />
      <BuggyCounter />
    </div>
    <Color />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
