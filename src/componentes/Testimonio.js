import React from "react";
import '../hojas-de-estilo/Testimonio.css'

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.imagen}.png`)} alt={(`Foto de ${props.nombre}`)} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio"><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className="cargo-testimonio">{props.cargo} at <strong>{props.empresa}</strong></p>
        <p className="texto-testimonio">" <strong>{props.negrita}</strong> {props.testimonio} <strong>{props.negrita2}</strong> {props.testimonio2} <strong>{props.negrita3}</strong>"</p>

      </div>
    </div>
  );
}

export default Testimonio;