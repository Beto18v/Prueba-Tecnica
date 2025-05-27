import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inicio } from "./pages/Inicio";
import { Detalle } from "./pages/Detalle";
import { ProveedorDispositivos } from "./context/DispositivosContext";

export const App = () => {
  return (
    <ProveedorDispositivos>
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/detalle/:id" element={<Detalle />} />
        </Routes>
      </Router>
    </ProveedorDispositivos>
  );
};
