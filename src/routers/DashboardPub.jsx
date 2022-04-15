import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../page/login/Login";

const DashboardPub = () => {
   return (
      <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
   );
};

export default DashboardPub;
