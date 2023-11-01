import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import App from './App.jsx'
// import {Root} from './router';
import './index.css';
// import { SimpleFormHook } from './02-useEfect/SimpleFormHook';
// import { MultipleCustomHooks } from './03-ejemplos/MultipleCustomHooks';
// import { EjemploUseRef } from './04-useRef/EjemploUseRef';
// import { Layout } from './05-useLayout/Layout';
// import { Memorize } from './06-useMemo/Memorize';
// import { MemorizeHook } from './06-useMemo/MemorizeHook';
// import { TodoApp } from './08-useReducer/TodoApp';
// import { SimpleForm } from './02-useEfect/SimpleForm';
// import {HookApp} from './Hookapp'
// import {CounterApp} from './01-useState/CounterApp'
// import { BrowserRouter } from "react-router-dom";
import { MainApp } from './09-useContext/MainApp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
     {/* //*/}
     {/* <App /> */}
     {/* <CounterApp /> */}
     {/* <SimpleForm /> */}
     {/* <SimpleFormHook /> */}
     {/* <MultipleCustomHooks /> */}
     {/* <EjemploUseRef /> */}
     {/* <Layout /> */}
     {/* <Memorize /> */}
     {/* <MemorizeHook /> */}
     {/* <TodoApp /> */}
     {/* // , */}
   {/* <MainApp /> */}
   </React.StrictMode>
)
