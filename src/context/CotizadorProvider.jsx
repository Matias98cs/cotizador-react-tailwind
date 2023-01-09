import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  //aca se puede definir lo que tu quieras para poner a disponer a todos los componentes
  const [error, setError] = useState("");
  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    //Una base
    let resultado = 2000

    //obtener diferencia de years
    const diferencia = obtenerDiferenciaYear(datos.year)

    //hay que restar el 3% por cada year
    resultado -= ((diferencia * 3) * resultado) / 100

    //europeo 30%
    //americano 15%
    //asiatico 5%
    resultado *= calcularMarca(datos.marca)

    //completo 50%
    //basico 20%
    resultado *= calcularPlan(datos.plan)
    
    //formatear dinero
    resultado = formatearDinero(resultado)
    console.log(resultado)

  }

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
