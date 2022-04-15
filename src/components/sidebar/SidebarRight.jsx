import { useEffect, useState } from "react";

import { fetchSinToken } from "../../helpers/fetch";
import "./sidebarright.css";
import TopList from "./TopList";

const SidebarRight = () => {
   const [animeTop, setAnimeTop] = useState([]);
   useEffect(() => {
      fetchSinToken("list/top")
         .then((resp) => resp.json())
         .then((data) => setAnimeTop(data.findTopList));
   }, []);

   return (
      <div className="sidebarright">
         {animeTop.map((top) => (
            <TopList key={top._id} movieTop={top} />
         ))}

         {/* <hr style={{marginBottom:"20px"}} />
        <TopList movieTop={nuevosCapitulos} /> */}
      </div>
   );
};

export default SidebarRight;
