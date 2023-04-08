import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Layout from "./components/Router/Layout";
import Publicroutes from "./components/Router/Publicroutes";
import Protectedroutes from "./components/Router/Protectedroutes";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Protectedroutes />}>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Route>
        <Route path="/" element={<Publicroutes />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
