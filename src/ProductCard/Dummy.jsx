import React from "react";
import "../ProductCard/Dummy.css";
import Card from "./Card";


const Dummy = (props) => {
  

  return (
    <>
      <div className="container-fluid bg-light">
        <div className="row ">
          <div className=" col-sm-10 col-10 col-lg-11 mx-auto  py-5 ">
          <h1 className="text-center text-bg-warning rounded-3 col-10 col-lg-11 mx-auto my-3 text-danger ">New Offer!</h1>
            <div className="row gap-1  gy-4">
              
              <Card data={props.data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dummy;

