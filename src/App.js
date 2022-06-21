
import { useEffect, useState } from "react";
import Animado from "./components/Animacion";
import HomeContenido from "./components/HomeContenido"



function App() {
  // const [buscar, setBuscar] = useState("");
  // const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   async function FetchMovies() {
  //     let res = await fetch("https://swapi.dev/api/films/");
  //     let data = await res.json();
  //     setMovie(data.results);
  //   }

  //   FetchMovies();
  // },[])

  // console.log("data",movie);
  return (
    <div className="App">
      <Animado />
      <HomeContenido/>
    </div>
  );
}

export default App;