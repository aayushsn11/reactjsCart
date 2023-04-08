import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/actions/authAction";
import { getCartItems, getCartState } from "../Redux/actions/dashboardAction";
import PersistentDrawerRight from "../Dashboard/Drawer";

const pages = ["Home", "Products"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Header = () => {

  return (
    <PersistentDrawerRight />
  );
};
export default Header;
