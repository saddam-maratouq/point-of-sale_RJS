import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

//logo
import Logo from "../../assets/Images/food-logo.png";

//auth0
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <section className="Navs">
      <nav className="navbar navbar-expand-lg   navbar-dark bg-dark ">
        <div className="container">
          <a>
            {" "}
            <img className="logo" src={Logo} alt="Logo" />{" "}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto  ">
              {/* Home */}
              <li className="nav-item ">
                <Link className="nav-link  " aria-current="page" to="/Home">
                  Home
                </Link>
              </li>

              {/* About */}
              <li className="nav-item">
                {/* <Link className="nav-link " aria-current="page" to='/#FoodDescrption' >About</Link> */}
                <a className="nav-link" href="#FoodDescrption">
                  {" "}
                  About
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/Pos">
                  Explorer Food
                </Link>
              </li>

              <li className="nav-item">
                <a href="#Review" className="nav-link">
                  Reviews
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">
                  {!isAuthenticated && (
                    <button
                      className="  btn-login "
                      onClick={() => loginWithRedirect()}
                    >
                      Log in
                    </button>
                  )}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/Home">
                  {isAuthenticated && (
                    <button
                      className=" btn-danger  btn-logout  "
                      onClick={() => logout()}
                    >
                      Log out{" "}
                    </button>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
