import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { addproducttoCart, updateCart } from "../Redux/actions/dashboardAction";

export default function Product({ product }) {
  const { cartItems } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const addtoCart = (product) => {
    const existingCartItem = cartItems?.find(
      (item) => item?.id === product?.id
    );
    if (existingCartItem) dispatch(updateCart(product));
    else dispatch(addproducttoCart(product));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography>{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => addtoCart(product)} variant="contained">Add to Cart</Button>
      </CardActions>
    </Card>
  );
}
