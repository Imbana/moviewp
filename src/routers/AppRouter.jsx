import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../page/home/Home";
import View from "../page/view/View";
import Movies from "../page/movies/Movies";
import DashboardPri from "./DashboardPri";
import DashboardPub from "./DashboardPub";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Capitulos from "../page/capitulos/Capitulos";


const AppRouter = () => {
   const validation = true;
   return (
      <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/animes" element={<Movies />} />
            <Route path="/peliculas" element={<Movies />} />
            <Route path="/ovas" element={<Movies />} />
            <Route path="/all" element={<Movies />} />
            <Route path="/capitulos" element={<Capitulos />} />
            {/* <Route path="/animes" element={<Movies />} />
            <Route path="/peliculas" element={<Movies />} />
            <Route path="/ovas" element={<Movies />} /> */}
            <Route path="/view" element={<View />} />
            <Route
               path="auth/*"
               element={
                  <PublicRoute validation={validation}>
                     <DashboardPub />
                  </PublicRoute>
               }
            />
            <Route
               path="/inicio/*"
               element={
                  <PrivateRoute validation={validation}>
                     <DashboardPri />
                  </PrivateRoute>
               }
            />
            <Route path="/*" element={<Navigate to="/" />} />
         </Routes>
      </BrowserRouter>
   );
};

export default AppRouter;
