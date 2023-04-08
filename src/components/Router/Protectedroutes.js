import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Protectedroutes() {
  const Useauth = () => {
    const { token } = useSelector((state) => state.auth);

    if (token) {
      return true;
    } else {
      return false;
    }
  };
  const auth = Useauth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default Protectedroutes;
