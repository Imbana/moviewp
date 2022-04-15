import "./movies.css";
// import Navbar from "../../components/navbar/Navbar";
import SidebarLef from "../../components/sidebar/SidebarLef";
import MovieContent from "../../components/movieContent/MovieContent";
import { useSelector } from "react-redux";
import { selectMovie } from "../../store/slices/moviesSlice";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Movies = () => {
   // const dispatch = useDispatch();'
   const navigate = useNavigate();
   const { movie: animeRedux } = useSelector(selectMovie);
   //    let [params] = useSearchParams();
   const [valueAnimes, setvalueAnimes] = useState(animeRedux);
   //    const valueType = useMemo(() => params.getAll("type"), [params]);
   //    const [valoresprueba, setValoresprueba] = useState([]);

   //    const selectType = useCallback(() => {
   //       let valueMovieType = [];
   //       switch (valueType[0]) {
   //          case "animes":
   //             valueMovieType = valueAnimes.filter(
   //                (movies) => movies.title === "eee"
   //             );
   //             setValoresprueba(valueMovieType);
   //             return;
   //          case "peliculas":
   //             valueMovieType = valueAnimes.filter(
   //                (movies) => movies.year === "2022"
   //             );
   //             setValoresprueba(valueMovieType);
   //             return;
   //          case "ovas":
   //             valueMovieType = valueAnimes.filter(
   //                (movies) => movies.genre === "eeee"
   //             );
   //             setValoresprueba(valueMovieType);
   //             return;
   //          default:
   //             setValoresprueba(valueAnimes)
   //             return;
   //       }
   //    }, [valueAnimes, valueType]);

   useEffect(() => {
      setvalueAnimes(animeRedux);

      console.log("valueAnimes",valueAnimes);
      console.log("!valueAnimes.length",!valueAnimes.length);
      if (Array.isArray(valueAnimes) && !valueAnimes.length) {
         navigate("/", { replace: true });
      }
      //   selectType();
   }, [navigate, valueAnimes, animeRedux]);

   return (
      <div className="movies">
         <div className="moviesContainer">
            <SidebarLef moviesRedux={valueAnimes} />
            <MovieContent />
         </div>
      </div>
   );
};

export default Movies;
