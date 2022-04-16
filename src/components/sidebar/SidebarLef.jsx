import { Autocomplete, TextField } from "@mui/material";
import { abc, dataCategory, date } from "../../data/dataList";
import "./sidebarlef.css";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CardTop from "../cards/CardTop";
import { moviesSearch, selectsearch } from "../../store/slices/searchSlice";
import { useSearchParams } from "react-router-dom";
import { dataGenre } from "../../data/dataList";
import { selectMovie } from "../../store/slices/moviesSlice";

const SidebarLef = () => {
   const dispatch = useDispatch();
   const { movie: moviesRedux } = useSelector(selectMovie);
   const { movies: valueSearchRedux } = useSelector(selectsearch);

   let [params] = useSearchParams();
   let valueType = params.getAll("type");


   const [formValue, setFormValue] = useState({
      abc: null,
      title: null,
      year: null,
      genre: null,
      category:null
   });
   const handleChangeInput = (target, value) => {
      setFormValue({
         ...formValue,
         [target]: value,
      });
   };

   useEffect(() => {
      if (!Object.values(formValue).some((item) => !!item)) {
         dispatch(moviesSearch(moviesRedux));
         return;
      }
      const newMovie = moviesRedux.filter(
         (item) =>
            item.year === formValue["year"] ||
            item.title.toUpperCase().startsWith(formValue["abc"]) ||
            item.title
               .toUpperCase()
               .includes(
                  formValue["tit2021le"] === "" || formValue["title"] === " "
                     ? null
                     : formValue["title"]
               ) ||
            item.genre === formValue["genre"] ||
            item.category === formValue["category"]
      );

      dispatch(moviesSearch(newMovie));
   }, [formValue, moviesRedux, dispatch]);

   return (
      <div className="sidebarlef">
         <div className="containermaterial movil">
            <Autocomplete
               color="primary"
               onChange={(event, newValue) => {
                  handleChangeInput("abc", newValue);
               }}
               value={formValue["abc"]}
               disablePortal
               id="combo-box-demo"
               options={abc}
               sx={{
                  flex: "1 0 150px",
                  marginRight: "10px",
                  marginBottom: "40px",
               }}
               renderInput={(params) => <TextField {...params} label="A...Z" />}
            />
            <Autocomplete
               disablePortal
               value={formValue["year"]}
               id="combo-box-demo"
               onChange={(event, newValue) => {
                  handleChangeInput("year", newValue);
               }}
               options={date}
               sx={{
                  flex: "1 0 150px",
                  marginRight: "10px",
                  marginBottom: "40px",
               }}
               renderInput={(params) => <TextField {...params} label="Año" />}
            />
         </div>
         <div className="containermaterial">
            <Autocomplete
               disablePortal
               onChange={(event, newValue) => {
                  handleChangeInput("genre", newValue);
               }}
               id="combo-box-demo"
               value={formValue["genre"]}
               options={dataGenre}
               sx={{
                  flex: "1 0 150px",
                  marginRight: "10px",
                  marginBottom: "40px",
               }}
               renderInput={(params) => (
                  <TextField {...params} label="Género" />
               )}
            />
            <Autocomplete
               disablePortal
               onChange={(event, newValue) => {
                  handleChangeInput("category", newValue);
               }}
               id="combo-box-demo"
               value={formValue["category"]}
               options={dataCategory}
               sx={{
                  flex: "1 0 150px",
                  marginRight: "10px",
                  marginBottom: "40px",
               }}
               renderInput={(params) => (
                  <TextField {...params} label="Categoría" />
               )}
            />
         </div>
         <form
            className={
               !Object.values(formValue).some((item) => !!item)
                  ? "sidebarlefSerch "
                  : "sidebarlefSerch on"
            }
         >
            <div className="searchLabel">
               <SearchIcon className="icon" />
               <input
                  onChange={(event) => {
                     handleChangeInput(
                        "title",
                        event.target.value.toUpperCase() === ""
                           ? null
                           : event.target.value.toUpperCase()
                     );
                  }}
                  type="text"
                  placeholder="Busca el anime ..."
               />
            </div>
            {valueType.length <= 0 && (
               <div className="searchContainer">
                  {valueSearchRedux.length >= 1 &&
                     valueSearchRedux
                        .slice(0, 5)
                        .map((movie) => (
                           <CardTop movie={movie} key={movie._id} />
                        ))}
               </div>
            )}
         </form>
      </div>
   );
};

export default SidebarLef;
