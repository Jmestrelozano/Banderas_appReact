

export const GetBuscador = async (llamar) => {
   
    const url =`https://restcountries.eu/rest/v2/name/${llamar}`
  
     const obtener = await fetch(url)
     const data = await obtener.json()

    
     let api = data.map(datos=>{
        return{
            imagen:datos.flag,
            titulo:datos.name,
            poblacion:datos.population,
            capital:datos.capital,
            region:datos.region
        }
    })
    return api
}
