import { ListaDispositivos } from "../components/ListaDispositivos";
import { Navbar } from "../components/Navbar";

// Página de inicio - catálogo de dispositivos GPS
export const Inicio = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h1 className="text-center mb-4">Catálogo de Dispositivos GPS</h1>
        <ListaDispositivos />
      </div>
    </div>
  );
};
