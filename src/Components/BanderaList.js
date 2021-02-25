import BanderaListCard from "./BanderaListCard";
import { peticiones } from "../api/GetApi";
import React, { useState, useEffect, useContext } from "react";
import { Context } from "../hooks/UseContext";
import { useHistory } from "react-router";


const BanderaList = () => {
  const {Search} = useContext(Context)
  const {Region} = useContext (Context);
  const [Banderas, setBanderas] = useState([]);



  useEffect(() => {
    peticiones("all").then(result =>{
      setBanderas(result)
    });
  }, []);
  
  useEffect(() => {
    setBanderas(Search)
  }, [Search])

  useEffect(() => {
    setBanderas(Region)
  }, [Region])

const history = useHistory()
const handleView = (name) =>{
  history.push(`/InfoBanderas/${name}`)
}

  return (
      <div className="resultado">
        {Banderas.map(({ flag, name, population, capital, region }, index) => {
          return (
            <div onClick={()=>{handleView(name)}} className="card-group" key={index}>
              <BanderaListCard
                imagen={flag}
                titulo={name}
                poblacion={population}
                capital={capital}
                region={region}
              />
            </div>
          );
        })}
      </div>

  );
};

export default BanderaList;
