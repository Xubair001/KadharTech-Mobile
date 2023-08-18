import React, { useState } from "react";

const FeedBack = () => {
  const [data, setData] = useState({
    fname:"",
    lname:"",
    username:"",
    city:"",
    zip:"",
    message:"",
  });
  const handleSubmit = (e) => {
    alert(
        `Thanks ${data.fname} ${data.lname} for Reaching us from ${data.city}. We always prefer Customer Sugesstion on top. And thanks for your precious review ${data.message} `
      );
    };
  const handleInput = (e) => {
    const { name , value } = e.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
    
  

  return (
    <div className="container-fluid ">
      <div className="row my-5">
        <div className="col-sm-10 col-12 col-lg-8 mx-auto my-5">
          <form
            class="row g-3 needs-validation bg-light p-5 "
            onSubmit={handleSubmit}
            novalidate
          >
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label">
                First name
              </label>
              <input
                type="text"
                name="fname"
                class="form-control"
                id="validationCustom01"
                onChange={handleInput}
                value={data.fname}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom02" class="form-label">
                Last name
              </label>
              <input
                type="text"
                name="lname"
                class="form-control"
                id="validationCustom02"
                onChange={handleInput}
                value={data.lname}
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <br />
            <div class="col-md-6">
              <label for="validationCustomUsername" class="form-label">
                Username
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  name="username"
                  class="form-control"
                  onChange={handleInput}
                  value={data.username}
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-6">
              <label for="validationCustom03" class="form-label">
                City
              </label>
              <input
                type="text"
                name="city"
                class="form-control"
                id="validationCustom03"
                onChange={handleInput}
                value={data.city}
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>

            <div class="col-md-4">
              <label for="validationCustom05" class="form-label">
                Zip
              </label>
              <input
                type="text"
                name="zip"
                onChange={handleInput}
                value={data.zip}
                class="form-control"
                id="validationCustom05"
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <br />
        
            <div class=" message">
              <label for="validationCustom05" class="form-label">
                Message
              </label>
              <textarea
                name="message"
                onChange={handleInput}
                value={data.message}
                class="form-control"
                id="validationCustom05"
                required
              />
              <div class="invalid-feedback">Please enter a Message.</div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-success form-control my-3 " type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
