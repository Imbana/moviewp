import "./feature.css";
import Slider from "react-slick";
import UltimosCap from "../listsMovie/ultimosCap/UltimosCap";
import AnimesList from "../listsMovie/ultimosCap/AnimesList";


import { useSelector } from "react-redux";
import { selectMovie } from "../../store/slices/moviesSlice";

const Feature = () => {
//    const [scoreNewAnime, setScoreNewAnime] = useState([]);
  
    const { movie: moviesRedux } = useSelector(selectMovie);
    
   const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
   };

//    useEffect(() => {
//       const scoreAnime = moviesRedux.filter(
//          (movie) => movie.genre === "Aventura"
//       );
//       //Falta ordenarlo por ayor a menor y poner el score real
//       setScoreNewAnime(scoreAnime);
//    }, [moviesRedux]);
    
 
   return (
      <div className="feature">
         <div className="featureSlick">
            <Slider {...settings}>
               {moviesRedux.map((scoremovie) => (
                  <div key={scoremovie._id}>
                     <img
                        className="featureImg"
                        src={scoremovie.imgTitle}
                        alt={scoremovie.title}
                     />
                  </div>
               ))}
            </Slider>
         </div>
         <div className="fuatureChilds">
            <UltimosCap />
            <AnimesList  />
         </div>
      </div>
   );
};

export default Feature;
