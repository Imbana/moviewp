import "./cardcap.css"

const CardCap = ({movieCard}) => {

   return (
      <div className="cardcap">
         <img
            className="cardImg"
            src={movieCard.anime.imgSmall}
            alt=""
         />
         <div className="cardInfo">
            <h4>{movieCard.title}</h4>
            <div className="cardEtiquetas">
               <span>{`T${movieCard.temporada}  E${movieCard.cap}`}</span>
            </div>
            {/* <div className="cardCalificacion">
               <span>
                  Start <span>9.4</span>
               </span>
            </div> */}
         </div>
      </div>
   );
};

export default CardCap;
