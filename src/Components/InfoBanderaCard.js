import React from "react";

export const InfoBanderaCard = ({
  imagen,
  titulo,
  nativo,
  poblacion,
  region,
  subregion,
  capital,
  domain,
  currencies,
  lenguaje,
}) => {
  return (
    <div className="info_card">
      <div className="info_img">
        <img src={imagen} className="card-img" alt="..." />
      </div>

      <div className="info_texto">
        <div className="info_texto1">
          <h5 className="card-title font-weight-bold text-uppercase">
            {titulo}
          </h5>
          <p className="card-text font-italic">Native name: {nativo}</p>
          <p className="card-text font-italic">Population: {poblacion}</p>
          <p className="card-text font-italic">region: {region}</p>
          <p className="card-text font-italic">subregion: {subregion}</p>
          <p className="card-text font-italic">capital: {capital}</p>
        </div>

        <div className="info_texto2">
          <p className="card-text font-italic">Top Level Domain: {domain}</p>
          <p className="card-text font-italic">
            Currencies: {currencies[0].name}
          </p>
          <p className="card-text font-italic">Languages: {lenguaje[0].name}</p>
        </div>
      </div>
    </div>
  );
};
