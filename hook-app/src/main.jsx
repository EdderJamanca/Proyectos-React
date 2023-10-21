import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';
// import {HookApp} from './Hookapp'
import {CounterApp} from './01-useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
     <CounterApp />
  </React.StrictMode>,
)
