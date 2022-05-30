import React from "react";

import './style.css'
import EstruturaPagina from "../EstruturaPagina/EstruturaPagina";


const PaginaInicial = () => (
    <section>
       <EstruturaPagina>
           <div className="apresentacao">
                <h1>Os melhores <span>aparelhos dentários</span></h1>
                <p>
                    Confira abaixo todas as dispoinibilidades odontológicas
                    que temos à sua disposição!
                </p>
                <div className="cards-especialidade">
                    <div className="card-especialidade">
                        <img src="assets/dente.png" alt="" />
                        <p>Pré-avaliação</p>
                    </div>
                    <div className="card-especialidade">
                        <img src="assets/dente.png" alt="" />
                        <p>Raio-x Digital</p>
                    </div>
                    <div className="card-especialidade">
                        <img src="assets/dente.png" alt="" />
                        <p>Aparelhos Dentários</p>
                    </div>
                    <div className="card-especialidade">
                        <img src="assets/dente.png" alt="" />
                        <p>Clareamento Dental</p>
                    </div>
                </div>
           </div>
           <div className="titulo-imagem">
                <h1>Por que usar <span>aparelho</span>?</h1>
                <img src="assets/aparelho.png" alt="" />
           </div>
       </EstruturaPagina>
    </section>
);
export default PaginaInicial;