import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginaContato from "../PaginaContato/PaginaContato";

import PaginaInicial from '../PaginaInicial/PaginaInicial';

const Rotas = () =>(
    <BrowserRouter>
    <Routes>
      <Route exact path='/'   element = { <PaginaInicial /> } />
      <Route path="/contato" element = {<PaginaContato/>}/>
    </Routes>
  </BrowserRouter>
);
export default Rotas;