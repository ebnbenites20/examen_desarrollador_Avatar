import React from "react";
import styled from "styled-components";
import Navar from "./Navar";
import Parrafo from "./Text";
import blockchain from "../img/bchain.png";



function MainContent() {
 
  return (
    <MainContentStyled>
      <Navar />
      <div className="content">
        <div className="left">
          <Parrafo
            title={"Lo Mejor del Espacio a tu Alcance"}
            identifier={"Before"}
          />
          <h1>Todas las Películas que necesites, en una Sola Página</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero id
            unde officiis hic nihil, quasi soluta ex corrupti nesciunt dolorem.
            Vero id unde officiis hic nihil, quasi soluta ex corrupti nesciunt
            dolorem. Quibusdam magni, delectus a autem soluta optio laborum!
          </p>
        </div>
        <div className="right">
          <img src={blockchain} alt="" />
        </div>

      </div>
    </MainContentStyled>
  );
}

const MainContentStyled = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 100%;
  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
    width: 100%;
    .left {
      display: flex;
      justify-content: center;
      flex-direction: column;
      h1 {
        padding: 1.8rem 0;
      }
      .btns-con {
        margin-top: 3rem;
      }
    }
    .right {
      img {
        position: absolute;
        right: -9%;
        bottom: -1%;
        width: 35%;
      }
    }
  }
`;


export default MainContent;
