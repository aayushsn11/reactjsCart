import { Divider } from "@mui/material";

/* eslint-disable jsx-a11y/img-redundant-alt */
const Cartitem = ({ item }) => {
  return (
    <div>
      <h3>{item?.name}</h3>
      <div className="cartwrap">
        <div className="information">
          <p>Price: {item?.price}</p>
          <p>Quantity: {item?.quantity}</p>
        </div>
        <div className="cartimage">
          {" "}
          <img className="c_image" src={item?.image} alt="product image" />
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Cartitem;
