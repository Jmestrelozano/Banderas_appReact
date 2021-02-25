import React, {useState } from "react";
import AppRouter from "./app-router/appRouter";
import { Context } from "./hooks/UseContext";

const Banderas = () => {
  const  [Search, setSearch]  = useState([]);
  const  [Region, setRegion]  = useState([])
  return (
    <>
      <Context.Provider value={{
          Search,
          setSearch,
          Region,
          setRegion
      }} >
        <AppRouter />
      </Context.Provider>
    </>
  );
};

export default Banderas;
