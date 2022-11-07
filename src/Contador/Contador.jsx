import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Contador = ({ value }) => {
  //let { value } = props;

  //creando la primer usaState
    const [ contadora, setContadora ]= useState( value ); // desestructuracion

  //declaracion de la funcion que manejara el boton adicionar
  function handleAdd ( e ) {
    //console.log ( value += 1 )
    // console.log(e);
    // console.log(e.target.id); //permite insertarlo en un arreglo y la variable e se dispara y captura el evento
    // document.getElementById('value').innerHTML = value += 1
    setContadora ( contadora + 1 );
  }

  //funcion que maneja la resta
  function handleResta () {
    setContadora ( contadora - 1 );
  }
  
  //funcion para resetear
  function handleReset () {
    setContadora (0);
  }

  return (
    <>
      <h1> CONTADOR</h1>
      <p> El valor de contador es:</p>
      <p> { contadora } </p>
      <button className="btn btn-success" type="button" name="adicionar" id="demo" onClick={ handleAdd }>Incrementa 1</button>
      <button className="btn btn-primary" type="button" name="adicionar" id="demo" onClick={ handleResta }>Resta 1</button>
      <button className="btn btn-secondary" type="button" name="adicionar" id="demo" onClick={ handleReset }>Reinicio</button>
      <p> { contadora } </p>
    </>
  );
};





export default Contador

//PropTypes
Contador.propTypes = {
  value: PropTypes.number,
}

//Default
Contador.defaultProps = {
  value: 48,
}
