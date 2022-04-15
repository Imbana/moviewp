import "./capitulos.css";
import { useEffect, useState } from "react";
import { fetchSinToken } from "../../helpers/fetch";
import { Link } from "react-router-dom";

const Capitulos = () => {
    const [capitulosNew, setCapitulosNew] = useState([])

   useEffect(() => {
      fetchSinToken("cap")
         .then((response) => response.json())
         .then((data) => setCapitulosNew(data.findCapitulo));
   }, []);

   return (
      <div className="capitulos">
          <div className="contentCapitulos">
          <ul className="ultimosCapContainer">
            {capitulosNew.map((capitulo) => (
               <li key={capitulo._id} className="ultimoCapCard capitulosCard">
                  <Link to={`/view?movie=${capitulo.anime._id}&cap=${capitulo.cap}`}>
                     <img
                        className="cardImg"
                        src={capitulo.anime.imgSmall}
                        alt="imagen"
                     />
                     <h3 className="cardTitle">{capitulo.title}</h3>
                     <span className="cardCapitulo"></span>
                  </Link>
               </li>
            ))}
         </ul>

          </div>
    
      </div>
   );
};

export default Capitulos;
