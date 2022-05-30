import React from "react";

import Topo from "../Topo/Topo";
import Rodape from "../Rodape/Rodape";

const EstruturaPagina = (props) =>(
    <section>
        <Topo />
        {props.children}
        <Rodape />
    </section>
);
export default EstruturaPagina;