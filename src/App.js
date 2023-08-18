import { React, useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dummy from "./ProductCard/Dummy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyProduct from "./ProductCard/BuyProduct";
import ErrorPage from "./ProductCard/ErrorPage";
import NavBar from "./ProductCard/NavBar";
import Footer from "./ProductCard/Footer";
import FeedBack from "./ProductCard/FeedBack";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products/");
      const jsonData = await res.json();
      console.log(jsonData.products);
      setData(jsonData.products);
    };

    fetchData();
  }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Dummy data={data} />} />          
          <Route path="/product/:id" element={<BuyProduct data={data} />} />
          <Route exact path="/feedback" element={<FeedBack />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};
export default App;
