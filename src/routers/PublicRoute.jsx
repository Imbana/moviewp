import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ validation, children }) => {
   if (!validation) {
      return children;
   } else {
      return <Navigate to="/" />;
   }
};

export default PublicRoute;
