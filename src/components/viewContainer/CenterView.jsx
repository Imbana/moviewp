import "./centerview.css";

const CenterView = ({ movieSelect,capituloSelect={},setCapSelect,maxCap}) => {
   const { desc, title,score  } = movieSelect;

console.log("maxCap",movieSelect);
console.log("maxCap",capituloSelect);
   return (
      <div className="centerView">
         <div className="centerViewDesc">
            <h3>{title}</h3>
            <div className="centerViewSinapsis">
               <span>Sinapsis</span>
               <p>{desc}</p>
            </div>
            <div className="centerViewScore">
               <span className="scoreLabel">Calificacion:</span>
               <span>{score}</span>
            </div>
         </div>
         <h3 className="centerViewSubtitle">{capituloSelect.title}</h3>
         <div className="centerViewVideo">
            <div className="player-wrapper">
               <iframe
                  title="myFrame"
                  width="100%"
                  height="100%"
                  allowFullScreen={true}
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  className="react-player"
                  src={capituloSelect.movieUrl}
                  frameBorder="0"
                  allow="autoplay"
                  scrolling="0"
                
               />
            </div>

            <div className="centerViewControls">
                {
                    capituloSelect.cap === 1 
                    ? (<button className="controler" >Prev</button>)
                    : (<button className="controler"  onClick={() => setCapSelect(item => item-1)}>Prev</button>)
                }
               
               <button className="controler">Animes</button>
               {
                    capituloSelect.cap === maxCap 
                    ? (<button className="controler"  >Next</button>)
                    : (<button className="controler"  onClick={() => setCapSelect(item => item+1)}>Next</button>)
                }
               
            </div>
         </div>
      </div>
   );
};

export default CenterView;
