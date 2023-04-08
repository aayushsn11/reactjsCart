import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../Redux/actions/dashboardAction";
import Cartitem from "./components/CartItems";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.dashboard);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  
  return (
    <div>
      <h2>Cart Items</h2>
      <div>
        {cartItems?.length ? (
          cartItems?.map((item) => {
            return <Cartitem item={item} />;
          })
        ) : (
          <div>No Items Found</div>
        )}
      </div>
    </div>
  );
};

export default Cart;
