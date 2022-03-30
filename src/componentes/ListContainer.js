import React from "react";
import "./ListContainer.css"
import { ItemCount } from "./ItemCount";

const ListContainer = (props) => {
    console.log(props.saludo);
    return (
        <>
        <h1>{props.saludo}</h1>
        < ItemCount />
        </>

    )

}

export default ListContainer