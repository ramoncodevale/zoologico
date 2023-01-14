import React from "react";
import Lagarto from "../../assets/lagarto.jpg";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <h1>
        VENHA <br></br>
        CONHECER <br></br>
        NOSSO <br></br>
        ZOOLÓGICO !
      </h1>
      <div>
        <img src={Lagarto} alt="imagem do camaleão" />
      </div>
    </div>
  );
};

export default Main;
