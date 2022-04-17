import "./navbar.css";
import {
   LocalMovies,

} from "@mui/icons-material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
    const [valueMenu, setValueMenu] = useState(false)
    console.log(valueMenu);
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
 
            <div  className={ valueMenu? "navbarContainerCenter active" : "navbarContainerCenter "} >

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
                  <span>Animes</span>
               </NavLink>
               <NavLink
                  to="/capitulos"
                  className={({ isActive }) =>
                     isActive ? "link active" : "link"
                  }
               >
                  <LocalMovies className="icon" />
                  <span>Capitulos</span>
               </NavLink>
            
            </div>
            <div className="navbarMenu" onClick={()=>setValueMenu(!valueMenu)}>
              { valueMenu ?
                <CloseIcon className="icon"/> :
               <MenuIcon  className="icon"/> 
               }
            </div>
         </div>
      </div>
   );
};

export default Navbar;
