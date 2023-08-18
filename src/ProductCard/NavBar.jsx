import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Dummy.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid ">
          <NavLink className="navbar-brand  mx-sm-3 mx-2 text-info "  to="/">
            ABDULLAH ZUBAIR
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""} `}
            id="navbarSupportedContent"
          >
            <form class="d-flex me-auto" role="search">
              <div className="d-none">
        
        </div>
      </form>
      
            <ul className="navbar-nav ms-0 mx-sm-3 mx-1 mb-2 mb-lg-0 ">
              <li className="nav-item mx-2 ">
                <NavLink
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                  onClick={handleMenuItemClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/feedback"
                  onClick={handleMenuItemClick}
                >
                   FeedBack
                </NavLink>
              </li>
            </ul>
            

          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
