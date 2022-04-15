import "./navbar.css";
import {
   LocalMovies,

} from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);

   window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
   };

   return (
      <div className={isScrolled ? "navbar scrolled" : "navbar"}>
         <div className="navbarContainer">
            <div className="navbarContainerLeft">
               <NavLink to="/" className="link">
                  <LocalMovies className="icon" />
                  <h2>
                     Anime <span> WP </span>
                  </h2>
               </NavLink>
            </div>
            <div className="navbarContainerCenter">
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     isActive ? "link active" : "link"
                  }
               >
                  <LocalMovies className="icon" />
                  <span>Inicio</span>
               </NavLink>
               <NavLink
                  to="/all?type=all"
                  className={({ isActive }) =>
                     isActive ? "link active" : "link"
                  }
               >
                  <LocalMovies className="icon" />
                  <span>All</span>
               </NavLink>
               {/* <NavLink
                  to="/animes?type=animes"
                  className={({ isActive }) =>
                     isActive ? "link active" : "link"
                  }
               >
                  <LocalMovies className="icon" />
                  <span>Anime</span>
               </NavLink>
               <NavLink
                  to="/peliculas?type=peliculas"
                  className={({ isActive }) =>
                     isActive ? "link active" : "link"
                  }
               >
                  <LocalMovies className="icon" />
                  <span>Peliculas</span>
               </NavLink>
               <NavLink
                  to="/ovas?type=ovas"
                  className={({ isActive }) =>
                     isActive ? "link active" : "link"
                  }
               >
                  <LocalMovies className="icon" />
                  <span>Ovas</span>
               </NavLink> */}
               {/* <NavLink
                  to="/view"
                  className={({ isActive }) =>
                     isActive ? "link active" : "link"
                  }
               >
                  <LocalMovies className="icon" />
                  <span>View</span>
               </NavLink> */}
            </div>
            <div className="navbarContainerRight">
               {/* <Search className="icon" />
               <Notifications className="icon" />
               <div className="profile">
                  <KeyboardArrowDown className="icon" />
               </div> */}
            </div>
         </div>
      </div>
   );
};

export default Navbar;
