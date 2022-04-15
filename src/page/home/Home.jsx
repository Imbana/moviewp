import { useDispatch } from "react-redux";

import "./home.css";
import SidebarLef from "../../components/sidebar/SidebarLef";
import SidebarRight from "../../components/sidebar/SidebarRight";
import Feature from "../../components/feature/Feature";
import { fetchMoviesAsync } from "../../store/slices/moviesSlice";
import { useEffect } from "react";


const Home = () => {
   const dispatch = useDispatch();
//    const [valueNewAnime, setValueNewAnime] = useState([]);

   useEffect(() => {
        dispatch(fetchMoviesAsync("movie"));
    }, [dispatch])
    


   //    useEffect(() => {
   //       const newMovie = moviesRedux.filter(
   //         // (movie) => movie.year === JSON.stringify(new Date().getFullYear())
   //         // Quitar esto cuando alla mas videos
   //          (movie) => movie.genre === "Aventura"
   //       );
   //       setValueNewAnime(newMovie);
   //    }, [moviesRedux]);

   return (
      <div className="home">
     
         <div className="homeContainer">
            <SidebarLef />
            <Feature />
            <SidebarRight />
         </div>
      </div>
   );
};

export default Home;
