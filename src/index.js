import ReactDOM from "react-dom/client";
import IndexApp from "./IndexApp";
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements,} from "react-router-dom";
import React from "react";
import Home from "./Home";
import Contador from "./Contador/Contador";
import { Saludo } from "./Saludo/Saludo";

//se debe mantener limpio, importando un solo elemento o ruta, para tenerlo lo mas sencillo posible

//OPCION 1 HTML PURO

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <h1>HOLA MUNDO</h1>
// );

//OPCION 2 CONSTANTE DE JSX

// const saludo = <h1> HOLA MUNDO DOS </h1> // esto es JSX
// const saludo2 = <h2> Grupo 48 </h2>

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render( saludo, saludo2);

//creacion de las rutas de nuestro proyecto
//las rutas se insertan dentro de un array, dicho array se enviara al routerProvider

const router = createBrowserRouter(
    createRoutesFromElements ( [
        <Route path="/" element={ <IndexApp />  } />,      //esta es la posicion 0 del array router    
        <Route path="/home" element={ <Home />  } />,          //posicion 1 del array router
        <Route path="/contador" element={ <Contador />  } />,          //posicion 2 del array router
        <Route path="/saludo" element={ <Saludo/> } />
    ])
 )

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
    <React.StrictMode>
        <RouterProvider router={ router } />
    </React.StrictMode>
    );