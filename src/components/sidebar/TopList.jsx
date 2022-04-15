import { useState } from "react";
import CardTop from "../cards/CardTop";
import "./toplist.css";

const TopList = ({ movieTop }) => {
   const [verMas, setVerMas] = useState(false);
   return (
      <div className="topList">
         <h3>{movieTop.title}</h3>
         <div
            className={
               verMas ? "topListContainer seeMore" : " topListContainer"
            }
         >
            {movieTop.content.map((movie, i) => (
               <CardTop movie={movie} key={i} />
            ))}
         </div>
         <button onClick={() => setVerMas(!verMas)}>Ver mas</button>
      </div>
   );
};

export default TopList;
