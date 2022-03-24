import React from "react";
import NavBar from "./componentes/NavBar";
import './Header.css';
import logo from './img/logoTienda.jpg';
import CarWidget from "./componentes/CarWidget";
import ListContainer from "./componentes/ListContainer";


const Header = () => {

    return (
        <>
        <img src={logo} alt="logo"/>
        <h1>Bienvenidos a nuestra tienda</h1>
        <div>
            <NavBar/>
        </div>
        <CarWidget/>
        < ListContainer saludo='Bienvenido a mi pagina'/>

        </>
    )
} 

export default Header