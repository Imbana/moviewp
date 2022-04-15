import { Link } from "react-router-dom";
import "./ultimosCap.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import { fetchSinToken } from "../../../helpers/fetch";
import { Movie } from "@mui/icons-material";

const UltimosCap = () => {
   const [listCapitulos, setListCapitulos] = useState([]);
   useEffect(() => {
      fetchSinToken("cap")
         .then((respuesta) => respuesta.json())
         .then((data) => setListCapitulos(data.findCapitulo));
   }, []);

   return (
      <div className="ultimosCap">
         <div className="ultimoCapTitle">
            <div className="animesListItem">
               <Movie />
               <h4>Ultimos capitulos agregados</h4>
            </div>
            <Link className="link" to="/capitulos">
               ver mas <ChevronRightIcon className="icon" />
            </Link>
         </div>

         <ul className="ultimosCapContainer">
            {listCapitulos.map((capitulo) => (
               <li key={capitulo._id} className="ultimoCapCard">
                  <Link
                     to={`/view?movie=${capitulo.anime._id}&cap=${capitulo.cap}`}
                  >
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
   );
};

export default UltimosCap;
