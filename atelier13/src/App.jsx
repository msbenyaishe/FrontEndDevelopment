import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import CalculFrais from "./components/Calcul_frais";
import Verification from "./components/Verification";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Navigate to="/calcul" replace />} />
        <Route path="/calcul" element={<CalculFrais />} />
        <Route path="/verification/:iddemande" element={<Verification />} />
      </Routes>
    </>
  );
}

export default App;
