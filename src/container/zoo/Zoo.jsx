import React from "react";
import Onca from "../../assets/onca.jpg";

import "./Zoo.css";

const Zoo = () => {
  return (
    <div className="zoologico">
      <h1>Zoológico</h1>
      <div className="container-zoologico">
        <img src={Onca} alt="Imagem da Onca" />
      <div>
        <p>
          What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. <br></br> Lorem Ipsum has been the industry's
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled <br></br> it to make a type specimen book.
          not only five centuries, <br></br> but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release <br></br> of Letraset sheets
          passages, and more recently with desktop  publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Zoo;
