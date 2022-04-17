import "./animeslist.css";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Movie } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { selectMovie } from "../../../store/slices/moviesSlice";

const AnimesList = ({ valueNewAnime = {} }) => {
   const { movie: moviesRedux } = useSelector(selectMovie);

   return (
      <div className="animesList">
         <div className="animesListTitle">
            <div className="animesListItem">
               <Movie />
               <h4>Últimos animes agregados</h4>
            </div>
            <Link className="link" to="all">
               ver mas <ChevronRightIcon className="icon" />
            </Link>
         </div>

         <ul className="animesListContainer">
            {moviesRedux.map((newAnime) => (
               <div key={newAnime._id} className="containerCard">
                  {/* <Link to="/view" > */}
                  <Link to={`/view?movie=${newAnime._id}`}>
                     <li className="animesListCard">
                        <img
                           className="cardImg"
                           src={newAnime.img}
                           alt="imagen"
                        />
                        <span
                           className={
                              newAnime.category === "Pelicula"
                                 ? "cardCategory red"
                                 : "cardCategory"
                           }
                        >
                           {newAnime.category}
                        </span>
                     </li>
                  </Link>
                  <h3 className="cardTitle">{newAnime.title}</h3>
               </div>
            ))}
         </ul>
      </div>
   );
};

export default AnimesList;
