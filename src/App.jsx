import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./pages/Products";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}

export default App;
