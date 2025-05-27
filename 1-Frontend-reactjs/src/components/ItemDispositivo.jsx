import { Link } from "react-router-dom";

// Muestra cada dispositivo en la lista
export const ItemDispositivo = ({ dispositivo }) => {
  return (
    <div className="container mb-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title text-primary">{dispositivo.nombre}</h5>
          <p className="card-text fw-bold">
            {dispositivo.precio.toFixed(2)} USD
          </p>
          <p className="card-text">{dispositivo.categoria}</p>
          <Link
            to={`/detalle/${dispositivo.id}`}
            className="btn btn-outline-primary w-100"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
};
