import React, { useState, useEffect } from "react";
import {  useParams } from "react-router";
import { peticiones } from "../api/GetApi";
import { InfoBanderaCard } from "../Components/InfoBanderaCard";

export const InfoBanderas = () => {
  const [InfoBandera, setInfoBandera] = useState([]);

  
const {name} =useParams()

  // let obtenerRuta = location.pathname.split("/");
  // let ruta = obtenerRuta[obtenerRuta.length - 1];

  useEffect(() => {
    peticiones(`name/${name}`).then(setInfoBandera );
  }, [name])

  return (
    <>
      <div className="card_bandera">
        {InfoBandera.map(({flag,name,nativeName,population,region,subregion,capital,topLevelDomain,currencies,languages}, index) => {
          return (
            <div key={index}>
              <InfoBanderaCard imagen={flag}
              titulo={name}
              nativo={nativeName}
              poblacion={population}
              region={region}
              subregion={subregion}
              capital={capital}
              domain={topLevelDomain}
              currencies={currencies}
              lenguaje={languages}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};
