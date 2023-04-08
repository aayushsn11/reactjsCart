import { ACTIONTYPES } from "../actions/actiontypes";

const data = [
  {
    id: 1,
    image: "faqimages/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png",
    name: "Boston Round",
    price: 700,
  },
  {
    id: 2,
    image: "faqimages/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png",
    name: "Boston Round",
    price: 700,
  },
  {
    id: 3,
    image: "faqimages/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png",
    name: "Boston Round",
    price: 700,
  },
  {
    id: 4,
    image: "faqimages/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png",
    name: "Boston Round",
    price: 700,
  },
  {
    id: 5,
    image: "faqimages/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png",
    name: "Boston Round",
    price: 700,
  },
  {
    id: 6,
    image: "faqimages/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png",
    name: "Boston Round",
    price: 700,
  },
  {
    id: 7,
    image: "faqimages/43-434027_product-beauty-skin-care-personal-care-liquid-tree.png",
    name: "Boston Round",
    price: 700,
  },
];

const forminitialstate = {
  products: data,
  cartItems: [],
  cartState: false,
};

const dashboardReducer = (state = forminitialstate, action) => {
  if (action.type === ACTIONTYPES.GETPRODUCTS) {
    return {
      ...state,
      products: action.payload,
    };
  }
  if (action.type === ACTIONTYPES.CARTSTATE) {
    return {
      ...state,
      cartState: action.payload,
    };
  }
  if (action.type === ACTIONTYPES.GETCARTITEMS) {
    return state;
  }
  if (action.type === ACTIONTYPES.UPDATECART) {
    const upd_obj = state.cartItems.findIndex(
      (item) => item.id === action.payload.id
    );
    state.cartItems[upd_obj].quantity = state.cartItems[upd_obj].quantity + 1;
    return {
      ...state,
    };
  }
  if (action.type === ACTIONTYPES.ADDTOCART) {
    const cart = [...state.cartItems, action.payload];
    return {
      ...state,
      cartItems: cart,
    };
  }
  return state;
};

export default dashboardReducer;
