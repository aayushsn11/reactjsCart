/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/actions/authAction";
import { getCartItems } from "../Redux/actions/dashboardAction";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cartitem from "../Cart.js/components/CartItems";

const drawerWidth = 380;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default function PersistentDrawerRight() {
  const dispatch = useDispatch();
  const theme = useTheme();

  const { token } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.dashboard);

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(getCartItems());
  }, [cartItems]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1 }}
            component="div"
          ></Typography>
          {token && (
            <>
              <Button
                key="logout"
                onClick={handleLogout}
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                Logout
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: "none" }) }}
              >
                <div className="cart_icon">
                  {" "}
                  <AddShoppingCartIcon /> <sub>{cartItems?.length}</sub>
                </div>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List className="cart_list">
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
            CartItems
          </Typography>
          {cartItems?.length ? (
            cartItems?.map((item) => {
              return (
                <ListItem>
                  <Cartitem item={item} />
                </ListItem>
              );
            })
          ) : (
            <div>No items added</div>
          )}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
