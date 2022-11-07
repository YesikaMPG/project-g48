import PropTypes from "prop-types"
import React from 'react'

export const Saludo = (props) => {
    console.log(props)
  return (
    <>
        <h1>BIENVENIDO SR(a) {props.nombre} {props.apellido} y su edad es {props.edad} </h1>
        </>
  )
}

export const Saludo2 = (props) => {
    const { nombre, apellido, edad} = props; //objeto desestructurado
  return (
    <>
        <p>BIENVENIDO SR(a) {nombre} {apellido} y su edad es {edad} </p>
    </>
  )
}

// export default Saludo;
// export default Saludo2;

//Declaracion de las propTypes para obligar a recibir un tipo de dato concreto

Saludo.propTypes ={
    nombre: PropTypes.string,
    apellido: PropTypes.string,
    edad: PropTypes.number
}