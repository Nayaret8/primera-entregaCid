import React from "react";
import "./ListContainer.css"

const ListContainer = (props) => {
    console.log(props.saludo);
    return (
        <h1>{props.saludo}</h1>
    )

}

export default ListContainer