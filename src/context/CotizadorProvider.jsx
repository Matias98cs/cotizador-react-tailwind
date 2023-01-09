import { createContext, useState } from "react";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  //aca se puede definir lo que tu quieras para poner a disponer a todosl os componentes
  const [modal, setModal] = useState(false)
  const cambiarState = () => {
    setModal(!modal)
  }

  return (
    <CotizadorContext.Provider value={{
        modal,
        cambiarState
    }}>
        {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
