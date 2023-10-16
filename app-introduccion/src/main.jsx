import React from "react";
import ReactDOM from "react-dom/client";
import {App} from "./HelloWordApp";
import { CounterApp } from "./CounterApp";

CounterApp

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CounterApp value={10} />
        {/* <App  
            titulo="Hola, soy Goku"
            subtitulo="mañana es cumpleaños de mi madre"
         /> */}
    </React.StrictMode>
)