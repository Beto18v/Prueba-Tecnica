import { createContext, useState, useEffect } from "react";
import { dispositivosGPS } from "../data/dispositivos";

// Manejar el estado de los dispositivos GPS
export const DispositivosContext = createContext();

export const ProveedorDispositivos = ({ children }) => {
  const [dispositivos, setDispositivos] = useState([]);

  useEffect(() => {
    setDispositivos(dispositivosGPS);
  }, []);

  return (
    <DispositivosContext.Provider value={{ dispositivos }}>
      {children}
    </DispositivosContext.Provider>
  );
};
