import React from "react";
import "./ListContainer.css"
import { ItemCount } from "./ItemCount";

const ListContainer = (props) => {
    console.log(props.saludo);

    let stock = 10;
    let initial= 1;

    const onAdd = (contador) =>{
        console.log ( `producto agregado ${contador} a carrito`);
    }

    
    return (
        <>
        <h1>{props.saludo}</h1>
        < ItemCount stock={stock} initial={initial} onAdd={onAdd} />
        </>

    )

}

export default ListContainer