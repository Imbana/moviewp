import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CenterView from "../../components/viewContainer/CenterView";
import LeftView from "../../components/viewContainer/LeftView";
import RightView from "../../components/viewContainer/RightView";
import { fetchSinToken } from "../../helpers/fetch";
import "./view.css";

const View = () => {
   const { pathname, search } = useLocation();

   const query = new URLSearchParams(search);
   const movieId = query.get("movie") || "";
   const capAllId = Number(query.get("cap")) || 1;
   console.log("capAllId",capAllId);
   console.log("capAllId",typeof(capAllId));
   const animeId = query.get("category") || "Anime";

   const [capSelect, setCapSelect] = useState(capAllId);
   const [movieSelect, setMovieSelect] = useState({});
   const [capitulosSelect, setCapitulosSelect] = useState([]);
   const [capituloSelect, setCapituloSelect] = useState([]);

   useEffect(() => {
      console.log("caps ver ");
      fetchSinToken(`movie/find/${movieId}`)
         .then((response) => response.json())
         .then((data) => setMovieSelect(data.findByIdMovie));

      if (animeId !== "Anime") {
         console.log("Entro a no es anime");
         return;
      }

      fetchSinToken(`cap/random?type=${movieId}`)
         .then((response) => response.json())
         .then((data) => {
            setCapitulosSelect(data.findCapitulos);
         });
   }, [movieId, animeId]);

   useEffect(() => {
      const animeCap = capitulosSelect.find(
         (itemCap) => itemCap.cap === capSelect
      );
      setCapituloSelect(animeCap);
   }, [capitulosSelect, capSelect]);

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname]);

   return (
      <div className="view">
         <LeftView movieSelect={movieSelect} />
         <CenterView
            movieSelect={movieSelect}
            capituloSelect={capituloSelect}
            setCapSelect={setCapSelect}
            maxCap={capitulosSelect.length}
         />
         <RightView setCapSelect={setCapSelect} capitulosSelect={capitulosSelect} capituloSelect={capituloSelect}/>
      </div>
   );
};

export default View;
