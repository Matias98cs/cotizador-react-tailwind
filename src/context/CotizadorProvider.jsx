import { createContext, useState } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  //aca se puede definir lo que tu quieras para poner a disponer a todos los componentes
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

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
