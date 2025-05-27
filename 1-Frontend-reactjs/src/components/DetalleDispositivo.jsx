import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DispositivosContext } from "../context/DispositivosContext";
import { Link } from "react-router-dom";

// Vista de cada dispositivo con sus detalles
export const DetalleDispositivo = () => {
  const { id } = useParams();
  const { dispositivos } = useContext(DispositivosContext);
  const dispositivo = dispositivos.find((d) => d.id === parseInt(id));

  return (
    <div className="detalle container mt-4">
      <div className="card-body">
        <h2 className="card-title text-success">{dispositivo.nombre}</h2>
        <p className="card-text">Precio: ${dispositivo.precio}</p>
        <p className="card-text">{dispositivo.descripcion}</p>
        <Link to="/" className="btn btn-primary">
          Regresar
        </Link>
      </div>
    </div>
  );
};
