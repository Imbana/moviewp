import { Link } from "react-router-dom";
import "./cardtop.css";

const CardTop = ({ movie }) => {
   
   return (
      <Link to={`/view?movie=${movie._id}`} className="cardTopLink">
         <div className="cardTop">
            <img className="cardImg" src={movie.img} alt="" />
            <div className="cardInfo">
               <h4>{movie.title}</h4>
               <div className="cardEtiquetas">
                  <span>{movie.genre}</span>
               </div>
               <div className="cardCalificacion">
                  <span>
                     Score <span>{movie.score}</span>
                  </span>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default CardTop;

// const CardTop = ({movie={}}) => {

//     return (
//        <div className="cardTop">
//           <img
//              className="cardImg"
//              src={movie.imgSmall}
//              alt=""
//           />
//           <div className="cardInfo">
//              <h4>{movie.title}</h4>
//              <div className="cardEtiquetas">
//                 <span></span>
//                 <span>{movie.genre}</span>
//              </div>
//              <div className="cardCalificacion">
//                 <span>
//                    Start <span>{movie.score}</span>
//                 </span>
//              </div>
//           </div>
//        </div>
//     );
//  };
