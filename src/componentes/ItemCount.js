
import react, {useState} from "react";

export const ItemCount = () => {

  const [contador, setContador]= useState(1);

  const handlerClick = () => {
    setContador (contador + 1);
  };

  const restador = () => {
    setContador (contador - 1)  }

  return (
    <>
    <h1>{contador}</h1>
    <button onClick={handlerClick}>Agregar</button>
    <button onClick={restador}>Quitar</button>
    
    </>
  );
};