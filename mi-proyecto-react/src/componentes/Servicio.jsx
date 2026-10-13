import React from 'react';
import '../assets/estilos/servicio.css';

export function Servicio(props) {
  return (
    <div className='contenedor-servicio'>
      <img className='imagen-servicio' src={props.imagen} alt='Foto del servicio' />
      <div className='texto-servicio'>
        <p className='titulo-servicio'>
          {props.titulo}
        </p>
        <p className='descripcion-servicio'>
          {props.descripcion}
        </p>
      </div>
    </div>
  );
}