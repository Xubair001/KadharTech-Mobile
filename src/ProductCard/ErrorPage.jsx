import React from 'react'
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <><div className="container-fluid vh-100 bg-danger">
        <div className="row">
            <div className="col-sm-10 my-5 mx-auto text-white text-center ">
                <h1 className='my-5'>Error 404! <br />
                Opp! You Landed in the wrong page 😭</h1>
                <NavLink to="/KadharTech-Mobile" exact className=" text-white btn btn-success" >Go Back</NavLink>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default ErrorPage;