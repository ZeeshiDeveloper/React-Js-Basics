import React from 'react';
import ReactDOM from 'react-dom/client';
// import deppencies here that are described in package.json

import './index.css';
import App from './App';
// all csss and jsx files import here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />,document.getElementById('root')); 
//we render our app html element which find in app.js file into root id place (inside index.html)


