import React from "react";
import {Link} from 'react-router-dom'
import './style.css'   

const Topo = () =>(
    <div className="area-topo">
        <div className="logo">
            <img src="assets/dente.png" alt="" /> 
            <Link className="logoTexto" to='/'>Dentes Saudáveis</Link> 
        </div>
        <div className="menu">
            <nav>
                <ul className="menu-lista">
                    <Link className="opcaoMenu" to='/'>HOME</Link>
                    <Link className="opcaoMenu" to='/contato'>CONTATO</Link>
                </ul>
            </nav>
        </div>
    </div>
);

export default Topo;