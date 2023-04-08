import { useSelector } from "react-redux";
import Header from "../Header";
import Product from "./Product";
import "./productlist.css";

const Dashboard = () => {
  const { products } = useSelector((state) => state.dashboard);
  return (
    <div>
      <Header />
      <div className="product_list">
        {products?.map((product) => {
          return (
            <div className="product_details">
              <Product product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
