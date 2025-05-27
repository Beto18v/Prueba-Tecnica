import { useContext } from "react";
import { DispositivosContext } from "../context/DispositivosContext";
import { ItemDispositivo } from "./ItemDispositivo";

//  Muestra la lista de dispositivos
export const ListaDispositivos = () => {
  const { dispositivos } = useContext(DispositivosContext);

  return (
    <div className="container mt-4">
      <div className="row">
        {dispositivos.map((dispositivo) => (
          <ItemDispositivo key={dispositivo.id} dispositivo={dispositivo} />
        ))}
      </div>
    </div>
  );
};
