import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Perfil from "../page/perfil/Perfil";


const DashboardPri = () => {
   return (
      <Routes>
         {/* <Route path="/series" element={<Home  type={"series"}/>} /> */}
         <Route path="/perfil" element={<Perfil />} />
         <Route path="/*" element={<Navigate to="" />} />
      </Routes>
   );
};

export default DashboardPri;
