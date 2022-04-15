import { useSelector } from "react-redux";

import { selectsearch } from "../../store/slices/searchSlice";
import CardMovie from "../cards/CardMovie";
import "./movieContent.css";

const MovieContent = () => {
   const { movies: valueSearchRedux } = useSelector(selectsearch);

   return (
      <div className="movieContent">
         <ul className="movieContentFlex">
            {valueSearchRedux.map((anime) => (
                <CardMovie key={anime._id} anime={anime}/>
            ))}
         </ul>
      </div>
   );
};

export default MovieContent;
