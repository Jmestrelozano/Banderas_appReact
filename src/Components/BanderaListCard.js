import React from "react";

const BanderaListCard = ({ imagen, titulo, poblacion, capital, region }) => {
  return (
    <div className="card shadow p-3 mb-5 bg-white rounded">
      <img className="card-img-top rounded" src={imagen} alt="" />
      <div className="card-body">
      <h5 className="card-title font-weight-bold text-uppercase">{titulo}</h5>
      <p className="card-text font-italic">Poblacion: {poblacion}</p>
      <p className="card-text font-italic">Capital: {capital}</p>
      <p className="card-text font-italic">Region: {region}</p>
      </div>
    </div>
  );
};

export default BanderaListCard;
