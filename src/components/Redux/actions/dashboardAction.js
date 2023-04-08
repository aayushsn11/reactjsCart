import { ACTIONTYPES } from "./actiontypes";

export const dashboardAction = () => async (dispatch) => {
  dispatch({
    type: ACTIONTYPES.GETPRODUCTS,
  });
};

export const getCartState = (cartstate) => (dispatch) => {
  dispatch({
    type: ACTIONTYPES.CARTSTATE,
    payload: cartstate,
  });
};

export const getCartItems = () => (dispatch) => {
  dispatch({
    type: ACTIONTYPES.GETCARTITEMS,
  });
};

export const addproducttoCart = (product) => (dispatch) => {
  const item = {
    id: product.id,
    name: product.name,
    quantity: 1,
    price: product?.price,
    image: product?.image,
  };
  dispatch({
    type: ACTIONTYPES.ADDTOCART,
    payload: item,
  });
};

export const updateCart = (product) => (dispatch) => {
  dispatch({
    type: ACTIONTYPES.UPDATECART,
    payload: product,
  });
};
