import React from "react";
import ImgSlider from "./ImgSlider";
import { NavLink, useParams } from "react-router-dom";
import './Dummy.css'

const CartProduct = (props) => {
  const data = props.data;
  const { id } = useParams();
  const Product = data.find((item) => item.id === parseInt(id));
  const handleSubmit=()=>{
    alert(`Thanks For Reaching Us! please Send us your information through feedback.`)
  }
  if (!Product) {
    return <p>Sorry ! Error in fetching data</p>;
  }
  return (
    <>
      <div className="container-fluid  bg-light">
        <div className="row">
          <div className=" col-sm-8 col-lg-6 col-12 mx-auto my-5 bg-light">
          <NavLink to="/KadharTech-Mobile" exact className=" text-white btn btn-dark my-3" >Go Back</NavLink>
            <div className="row">
              
            
              <div className="product-show py-5 bg-white ">
                <ImgSlider val={Product}/>
                <h1 className="product-title mt-5">{Product.title}</h1>
                <p>{Product.description}</p> <hr />
                <p><span className="product-desc">Available Stock : </span>{Product.stock}  </p>
                <p><span className="product-desc"> Brand : </span> {Product.brand}</p>
                <p><span className="product-desc"> Category : </span>{Product.category}</p>
                <p><span className="product-desc">Discount : </span> {Product.discountPercentage}%</p>
                <p><span className="product-desc">Price : </span>${Product.price}  </p>
                <p><span className="product-desc"> Rating : </span>{`⭐⭐⭐⭐ ${Product.rating}`}</p>      
                <button className="btn btn-success my-3 form-control" onClick={handleSubmit}>Buy Now</button>      
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
