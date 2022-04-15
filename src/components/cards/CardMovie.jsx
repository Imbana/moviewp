import "./cardMovie.css"
import { Link } from "react-router-dom";

const CardMovie = ({anime={}}) => {
   return (
      <div key={anime._id} className="cardMovie">
         <Link to={`/view?movie=${anime._id}`}>
            <figure className="cardMovieImg">
               <img className="cardImg" src={anime.img} alt="imagen" />
                <span  className={anime.category === "Pelicula" ? "cardCategory red" : "cardCategory"}>{anime.category}</span>
            </figure>
            <h3 className="cardTitle">{anime.title}</h3>
         </Link>
      </div>
   );
};

export default CardMovie;
