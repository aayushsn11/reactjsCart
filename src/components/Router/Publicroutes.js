import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function Publicroutes() {
  const {token} = useSelector((state) => state.auth);
  const Useauth = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };
  const auth = Useauth();
  return auth ? <Navigate to="/dashboard" /> : <Outlet />;
}

export default Publicroutes;
