import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
   Collapse,
   List,
   ListItemButton,
   ListItemIcon,
   ListItemText,
} from "@mui/material";
import { useState } from "react";
import CardCap from "../cards/CardCap";
import "./rightview.css";

const RightView = ({ capitulosSelect, capituloSelect, setCapSelect }) => {
   const [open, setOpen] = useState(true);

   const handleClick = () => {
      setOpen(!open);
   };

   return (
      <div className="rightView">
         <div className="topList">
            <h3>Temporadas</h3>

            <ListItemButton onClick={handleClick}>
               <ListItemIcon>
                  <StarBorder color="primary" />
               </ListItemIcon>
               <ListItemText
                  style={{ color: "white" }}
                  primary="Primera Temporada"
               />
               {open ? (
                  <ExpandLess color="primary" style={{ fontSize: "2rem" }} />
               ) : (
                  <ExpandMore color="primary" style={{ fontSize: "2rem" }} />
               )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
               <List className="hoaa" component="div" disablePadding>
                  {capitulosSelect.map((movieCard) => (
                     <ListItemButton
                        onClick={() => setCapSelect(movieCard.cap)}
                        key={movieCard._id}
                        sx={{
                           pl: 4,
                           bgcolor: `${
                              movieCard.cap === capituloSelect?.cap
                                 ? "text.disabled"
                                 : ""
                           }`,
                        }}
                     >
                        <CardCap movieCard={movieCard} />
                     </ListItemButton>
                  ))}
               </List>
            </Collapse>

            {/* <button onClick={() => setVerMas(!verMas)}>Ver mas</button> */}
         </div>
      </div>
   );
};

export default RightView;
