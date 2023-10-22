import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App.jsx'
import './index.css';
// import { SimpleFormHook } from './02-useEfect/SimpleFormHook';
// import { MultipleCustomHooks } from './03-ejemplos/MultipleCustomHooks';
// import { EjemploUseRef } from './04-useRef/EjemploUseRef';
import { Layout } from './05-useLayout/Layout';
import { Memorize } from './06-useMemo/Memorize';
import { MemorizeHook } from './06-useMemo/MemorizeHook';
// import { SimpleForm } from './02-useEfect/SimpleForm';
// import {HookApp} from './Hookapp'
// import {CounterApp} from './01-useState/CounterApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
     {/* <CounterApp /> */}
     {/* <SimpleForm /> */}
     {/* <SimpleFormHook /> */}
     {/* <MultipleCustomHooks /> */}
     {/* <EjemploUseRef /> */}
     {/* <Layout /> */}
     {/* <Memorize /> */}
     <MemorizeHook />
  </React.StrictMode>,
)
