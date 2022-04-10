import React from "react";
import "./App.css";
import { Cabecalho } from "../../Componentes/Cabecalho/Cabecalho";
import { ContainerCentral } from "../../Componentes/ContainerCentral/ContainerCentral";
import { Rodape } from "../../Componentes/Rodape/Rodape";

const App = () => (
  <div className="App">
    <Cabecalho />
    <ContainerCentral>
      <h1>Página inicial</h1>
    </ContainerCentral>
    <Rodape />
  </div>
);

export { App };
