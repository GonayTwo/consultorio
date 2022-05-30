import React from "react";
import { Link } from "react-router-dom";
import EstruturaPagina from "../EstruturaPagina/EstruturaPagina";

import './style.css'

const PaginaContato = () =>(
    <section>
        <EstruturaPagina>
            <div className="atendimento">
                <h1>Horários de <span>atendimento</span></h1>
                <p>Agende uma consulta pelo telefone: (21)3699-9999</p>
            </div>
            <div className="cardsMedicos">
                <div className="cardMedico">
                    <img src="assets/medico01.png" alt="" />
                    <h2>Dr. Hélio</h2>
                    <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                </div>
            </div>
        </EstruturaPagina>
    </section>
);
export default PaginaContato;