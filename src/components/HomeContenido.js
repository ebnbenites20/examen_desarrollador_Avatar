import React from "react";
import styled from "styled-components";
import { Interno } from "../layout";
import Contacto from "./Contacto";
import Principal from "./Title";
import PeliculaCardStyled from "./PeliculaCard";
import { useEffect, useState } from 'react';
import { FaRedoAlt, FaPlus } from "react-icons/fa";
import portada from "../img/portada.jpg";
import PopUp from "./PopUp"

function HomeContent() {
  const [buscar, setBuscar] = useState("");
  const [movie, setMovie] = useState([]);
  const [act, setact] = useState([]);
  const [estadop, cambiarp] = useState(false);
  const handleChange = e => {

    setBuscar(e.target.value);
    filtrar(e.target.value)
  }



  const filtrar = (finBuscar) => {
    if (buscar !== '') {
      var resultadosBusqueda = movie.filter((elemento) => {

        if (elemento.title.toString().toLowerCase().includes(finBuscar.toLowerCase())
          || elemento.director.toString().toLowerCase().includes(finBuscar.toLowerCase())) {

          return elemento;
        }
      });

      setMovie(resultadosBusqueda);
    }
  }


  useEffect(() => {
    async function FetchMovies() {

      let res = await fetch("https://swapi.dev/api/films/");
      let data = await res.json();
      setMovie(data.results);

    }
    async function FetchAct() {

      let res = await fetch("https://swapi.dev/api/people/");
      let data = await res.json();
      setMovie(data.results);

    }
    FetchMovies();
    FetchAct();
  }, []);

  return (
    <HomeStyled>
      <Interno>
        <Principal
          title={"Top MovieStars"}
          subtitle={"Toda las temporadas"}
        />
        <div>
          <input
            type="text"
            value={buscar}
            placeholder="Digite el nombre de la película"
            maxLength="50"
            minLength="3"
            onChange={handleChange}
          />



          <button onClick={handleChange}>
            <FaRedoAlt />
          </button>

        </div>
        <PeliculaCardStyled>
          {movie &&
            movie.map((movies) => (
              <div key={movies.episode_id} className="PeliculaCard">
                <div className="number">
                  <p>0 {movies.episode_id}</p>
                </div>
                <div className="profile">
                  <img src={portada} alt="" />
                  <div className="text">
                    <h4>{movies.title}</h4>
                    <p>{movies.director}</p>

                  </div>
                </div>
                <div>
                  {/* <div className="ContenedorBotones">
                    <button className="Boton" onClick={()=>cambiarp(!estadop)}><FaPlus/></button>
                    <PopUp
                      estado={estadop}
                      cambiarestado={cambiarp}
                      titulo={ }
                      showH={true}
                      showO={true}

                      >
                        <contenido>
                          <h1>{ }</h1>
                          <p>{ }</p>
                          <button className="Boton" onClick={()=>cambiarp(!estadop)}>Close</button>
                        </contenido>
                    </PopUp>
                  </div> */}
                </div>
              </div>
            ))}
        </PeliculaCardStyled>
      </Interno>
      <Contacto />
      <footer>
        <p>Copyright ©Elvis Saul Benites Narrea. All Rights Reserved</p>
      </footer>
    </HomeStyled>
  );
}

const HomeStyled = styled.div`
  .cartelera {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;
    &:last-child {
      justify-content:flex-end;
    }
  }
  

  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #020a27;
    padding: 3rem 0;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    p {
      text-align: center;
      opacity: 0.7;
    }
}


.ContenedorBotones{
	padding: 40px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 20px;
}
input {
  min-width: 250px;
  width: 55%;
  background-color: #fff;
  height: 40px;
  padding-left: 20px;
  margin: 50px 0;
  border-radius: 20px;
  justify-content: space-between;
  font-size: 1rem;
}
button {
  text-transform: uppercase;
  background: linear-gradient(130deg, #395ff6, #eb3fa9);
  padding: 0.9rem 1.5rem;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  &:last-child {
    margin-left: 1.5rem;
  }
  &:hover {
    transition: all 0.4s ease-in-out;
    background: linear-gradient(120deg, #eb3fa9, #395ff6);
  }
}

.Boton{ 
	display: block;
	padding: 10px 30px;
	border-radius: 100px;
	color: #1766DC;
	border: none;
	background: #fff;
	cursor: pointer;
	font-family: 'Roboto', sans-serif;
	font-weight: 500;
	transition: .3s ease all;
	&:hover {
		background: #0066FF;
	}


  
  
 
`;

export default HomeContent;
