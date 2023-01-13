import React from "react";
import Camaleao from '../../assets/camaleao.jpg';
import './Main.css';


const Main = () => {
  return (
    <div className="main-container">
      <h1>
        VENHA <br></br>
        CONHECER <br></br>
        NOSSO <br></br>
        ZOOLÓGICO !
      </h1>
      <img src={Camaleao} alt="imagem do camaleão" />
    </div>
     
    
  );
};

export default Main;
