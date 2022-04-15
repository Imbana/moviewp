import "./searchGen.css"
import { useState } from "react";

const SearchGen = ({ valores }) => {
   const [generoSelect, setGeneroSelect] = useState("#");
   return (
      <div className="searchGen">
         <h4>{generoSelect}</h4>
         <div className="searchGenContainer">
            {valores.map((item) => (
               <span
                  key={item}
                  onClick={() => setGeneroSelect(item)}
                  className="searchGenItem"
               >
                  {item}
               </span>
            ))}
         </div>
      </div>
   );
};

export default SearchGen;
