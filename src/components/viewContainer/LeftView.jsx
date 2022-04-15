import "./leftview.css"
const LeftView = ({movieSelect={}}) => {
    const {img,year,genre,title,score,category} = movieSelect

   return (
      <div className="leftView">
         <div className="viewLeftImg">
            <img
               src={img}
               alt="img title"
            />
         </div>
         <div className="viewLeftBotton">
            <div className="labelLeft">
               <h4>Titulo</h4>
               <span>{title}</span>
            </div>
            <div className="labelLeft">
               <h4>Calificacion</h4>
               <span>{score}</span>
            </div>
            <div className="labelLeft">
               <h4>Género</h4>
               <span>{genre}</span>
            </div>
            <div className="labelLeft">
               <h4>Año</h4>
               <span>{year}</span>
            </div>
            <div className="labelLeft">
               <h4>Categoria</h4>
               <span>{category}</span>
            </div>
         </div>
      </div>
   );
};

export default LeftView;
