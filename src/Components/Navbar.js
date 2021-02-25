import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <Link className="navbar-brand" to="/bandera">
          Where in the world?
        </Link>
        <a className="boton" >
          <i className="far fa-moon">Dark Mode</i>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
