import Contador from "./Contador/Contador";
import "./IndexApp.css" //asi se importa un estilo del archivo css
import NavBar from "./NavBar/NavBar";
// import { Saludo, Saludo2 } from "./Saludo/Saludo";

//este es nuestro primer componente en react, es el que se llama a rendeizar desde el index.js 
//un componente en react es una funcion javascrip que tiene un return que devuelve etiquetas html o devolver otro componente
// o puede devolver combinaciones entre etiquetas html, javascrip 
const IndexApp = () => {
    //en este espacio antes del return se pueden declarar datos o funciones javascript y usarlas dentro del return
    // const titulo = 'React';
//se colocan las {} para usar codigo javascrip dentro de la etiqueta html
//dentro de una etiqueta vacia (fragmento) se pueden colocar varios elementos, tambien se puede usar etiqueta div
    return (
        <>
            {/* <h1 className="saludo">Hola mundo, esto es {titulo} </h1> 
            <p>Prueba de fragmento</p>
            <p>Este es otro elemento</p>
            <Saludo nombre = {" Pepito "} apellido = {"Lopez"} edad = {30}/>
            <Saludo2 nombre = {" carlos "} apellido = {"Enciso"} edad = {20}/> */}
           
            <header>
                <NavBar/>
            </header>

            <main>
                <Contador value = {0} />
            </main>

            <footer>
                
            </footer>
        </>
    );
}

export default IndexApp;