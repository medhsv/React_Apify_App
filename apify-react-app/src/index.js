// src/index.js

// Polyfills should be imported at the top
import 'os-browserify';
import 'util';
import 'browserify-zlib';
import 'assert';
import { Buffer } from 'buffer';
import { Readable } from 'stream';

// Make Buffer available globally
window.Buffer = Buffer;

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
