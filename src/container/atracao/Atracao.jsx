import React from "react";
import Rinoceronte from "../../assets/rinoceronte.jpg";
import Leao from "../../assets/leao.jpg";
import Elefante from "../../assets/elefante.jpg";
import Macaco from "../../assets/macaco.jpg";
import Tigre from "../../assets/tigre.jpg";

import "./Atracao.css";

const Atracao = () => {
  return (
    <div className="atracao">
      <h1>Atrações</h1>
      <div className="zoo-galeria">
        <div className="container-atracao">
          <img src={Rinoceronte} alt="Imagem da Rinoceronte" />
          <img src={Leao} alt="Imagem do Leao" />
          <img src={Elefante} alt="Imagem do Elefante" />
          <img src={Macaco} alt="Imagem do Macaco" />
          <img src={Tigre} alt="Imagem do Tigre" />
        </div>;
      </div>
    </div>
  );
};

export default Atracao;
