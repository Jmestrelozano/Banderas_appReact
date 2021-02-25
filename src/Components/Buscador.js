import React, { useState, useContext} from "react";
import { peticiones } from "../api/GetApi";
import { Context } from "../hooks/UseContext";

export const Buscador = () => {
  const [Buscador, setBuscador] = useState({
    InputBuscador: "",
  });

  const { InputBuscador } = Buscador;
  const {Search, setSearch } = useContext(Context);

  
  const handleSubmit = (e) => {
    e.preventDefault();
if(InputBuscador ===""){
  setSearch(Search)
}else{
    peticiones(`name/${InputBuscador}`).then((result) => {
      result.map(({ flag, name, population, capital, region }) => {
        let array = [
          {
            flag: flag,
            name: name,
            population: population,
            capital: capital,
            region: region,
          },
        ];
        setSearch(array);
      });
    });
  }
  };

  const handleChange = ({ target }) => {
    setBuscador({ ...Buscador, [target.name]: target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form-inline">
        <input
          onChange={handleChange}
          className="form-control mr-sm-2 shadow p-3  bg-white rounded"
          type="text"
          placeholder="Search"
          aria-label="Search"
          name="InputBuscador"
          autoComplete="off"
          value={InputBuscador}
        />
      </form>
    </>
  );
};
