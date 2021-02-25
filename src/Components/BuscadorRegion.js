import React, { useContext } from "react";
import { peticiones } from "../api/GetApi";
import { Context } from "../hooks/UseContext";

const BuscadorRegion = () =>{
const {setRegion} = useContext(Context)

  const handleClick = (e) => {
    const selectRegion =e.target.textContent
    console.log(selectRegion)


    peticiones(`region/${selectRegion}`).then(result =>{
      setRegion(result)
    }
    )};

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-outline-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Regiones
        </button>
        <div  className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a onClick={handleClick} className="dropdown-item" href="#">
            Africa
          </a>
          <a onClick={handleClick} className="dropdown-item" href="#">
            Americas
          </a>
          <a onClick={handleClick} className="dropdown-item" href="#">
            Asia
          </a>
          <a onClick={handleClick} className="dropdown-item" href="#">
            Europe
          </a>
          <a onClick={handleClick} className="dropdown-item" href="#">
            Oceania
          </a>
        </div>
      </div>
    </>
  );
};

export default BuscadorRegion;
