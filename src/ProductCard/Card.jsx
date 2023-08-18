import React from "react";
import ImgSlider from "./ImgSlider";
import { NavLink } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      {!data ? (
        <p className="text-center">error in fetching data</p>
      ) : (
        data.map((val) => (
          <>
          <div
              className="card col-md-4 col-sm-6 col-lg-3 col-12 mx-auto"
              key={val.id}
            >
          <NavLink
                      to={{ pathname: `/product/${val.id}` }}
                      className="Card text-black"
                      style={{textDecoration:"none"}}
                    >
                      
                    
            
              {/* <img height={180} src={val.thumbnail} class="card-img-top" alt="Thumbnail" /> */}
              <ImgSlider val={val} />

              <div className="card-body">
                <ul>
                  <h5 className="card-title mt-3 ">{val.title} <hr /> </h5> 
                  <li className="card-text mt-5"> {val.description}</li>                  
                  <li className="card-rating">{`${val.rating} ⭐⭐⭐⭐`}</li>
                  <div className="d-flex mt-3 flex-wrap flex-md-row flex-column-reverse  justify-content-between ">
                  <NavLink
                      to={{ pathname: `/product/${val.id}` }}
                      className="btn btn-success my-4"
                    >
                      Add to Cart
                    </NavLink>
                    <p className="mx-md-1 my-auto mr-auto ">
                      <span className=" text-center text-md-right d-md-none d-inline-block">
                        Price :
                      </span>
                      ${val.price}
                    </p>
                  </div>
                </ul>
              </div>
              </NavLink>
            </div>
            
          </>
        ))
      )}
    </>
  );
};

export default Card;
